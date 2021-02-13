module.exports = {
  createExperience
}

const constants = require('./constants')
const stripe = require('stripe').Stripe(constants.stripeApiKey)

/**
 *
 * @param {RetoPlusOne.Experience} experience
 * @returns {Promise<Stripe.Price>}
 */
async function createExperience (experience) {
  const stripeExperience = await stripe.products.create({
    name: experience.title,
    caption: experience.description,
    images: [experience.pic_url],
    type: 'good'
  })

  const stripePrice = await stripe.prices.create({
    currency: experience.currency,
    product: stripeExperience.id,
    unit_amount: experience.price
  })
  console.log(stripePrice)
  return stripePrice
}


