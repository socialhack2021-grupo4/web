const experiences = require('./initial-data/experiences')
const users = require('./initial-data/users')
const constants = require('./constants')
const _ = require('lodash')

const Keyv = require('keyv')

const experiencesDB = new Keyv()
const usersDb = new Keyv()
const mainDB = new Keyv()

async function setup () {
  for (const experience of experiences) {
    await experiencesDB.set(experience.id, experience)
  }
  const experiencesIds = _.map(experiences, 'id')
  await mainDB.put(constants.experiencesKey, experiencesIds)

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

async function buyExperience (userId, id) {
  const experience = await getExperience(userId, id)
  if (experience.is_bought) {
    const err = new Error('Experience already bought')
    err.http_code = 400
    throw err
  }
}


module.exports = {
  setup,
  getExperiencies,
  getExperience,
  buyExperience
}

