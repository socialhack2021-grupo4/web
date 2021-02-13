require('dotenv').config({ path: './test.env' })
module.exports = {
  PORT: 3001,
  experiencesKey: 'experiences',
  stripeApiKey: process.env.STRIPE_API_KEY
}
