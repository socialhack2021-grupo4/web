const experiences = require('./initial-data/experiences')
const users = require('./initial-data/users')
const constants = require('./constants')
const stripe = require('./stripe')

const _ = require('lodash')
const Keyv = require('keyv')

const experiencesDB = new Keyv()
const usersDb = new Keyv()
const mainDB = new Keyv()
const sessionsDB = new Keyv()

async function setup () {
  for (const experience of experiences) {
    const stripeProduct = await stripe.createExperience(experience)
    experience.stripeId = stripeProduct.id
    await experiencesDB.set(experience.id, experience)
  }

  const experiencesIds = _.map(experiences, 'id')
  await mainDB.set(constants.experiencesKey, experiencesIds)

  for (const user of users) {
    await usersDb.set(user.id, user)
  }
}

async function getExperiencies (userId) {
  // TODO probably paginate
  const ids = await mainDB.get(constants.experiencesKey)

  const user = await usersDb.get(userId)

  const boughtExperiences = _.keyBy(user.bought_experiences, 'id')
  const experiences = []
  // If redis. Use mget
  for (const id of ids) {
    const experience = await experiencesDB.get(id)
    if (boughtExperiences[experience.id]) {
      experience.is_bought = true
    }
    experiences.push(experience)
  }

  return experiences
}

async function getExperience (userId, id) {
  const user = await usersDb.get(userId)
  const boughtExperiences = _.keyBy(user.bought_experiences, 'id')
  const experience = await experiencesDB.get(id)
  experience.is_bought = boughtExperiences[id]
  return experience
}

/**
 *
 * @param userId
 * @param id
 * @returns {Promise<Stripe.Session>}
 */
async function startBuy (userId, id) {
  const experience = await getExperience(userId, id)
  if (experience.is_bought) {
    const err = new Error('Experience already bought')
    err.http_code = 400
    throw err
  }

  const stripeSession = await stripe.requestBuy(experience)
  sessionsDB.set(stripeSession.id, {
    userId,
    experienceId: id
  })
  return stripeSession
}

async function validateBuy (event, signature) {
  const session = await stripe.validateBuy(event, signature)
  if (!session) {
    // We receive other events
    return
  }
  const sessionInfo = await sessionsDB.get(session.id)
  const experience = await experiencesDB.get(sessionInfo.experienceId)
  const user = await usersDb.get(sessionInfo.userId)
  user.bought_experiences.push({
    id: experience.id
  })
  await usersDb.set(sessionInfo.userId, user)
  experience.n_participants++
  await experiencesDB.set(experience.id, experience)
}

module.exports = {
  setup,
  getExperiencies,
  getExperience,
  startBuy,
  validateBuy
}
