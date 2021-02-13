module.exports = {
  createExperience,
  requestBuy
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

/**
 *
 * @param {RetoPlusOne.Experience} experience
 * @returns {Promise<Stripe.Session>}
 */
async function requestBuy (experience) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price: experience.stripeId,
      quantity: 1
    }],
    mode: 'payment',
    success_url: `${constants.frontendUrl}/success?experience=${experience.id}`,
    cancel_url: `${constants.frontendUrl}/cancel?experience=${experience.id}`
  })
  return session
}

async function validateBuy (rawEvent, signature) {
  const event = await stripe.webhooks.constructEvent(rawEvent, signature, constants.stripeWebhookKey)
  console.log(event)
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Fulfill the purchase...
    handleCheckoutSession(session);
  }
}
