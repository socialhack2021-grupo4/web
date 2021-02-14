require('dotenv').config({ path: './test.env' });
const PORT = 3001;
module.exports = {
  PORT,
  experiencesKey: 'experiences',
  stripeApiKey: process.env.STRIPE_API_KEY,
  stripeWebhookKey: process.env.STRIPE_WEBHOOK_SECRET,
  url: `https://localhost:${PORT}`,
  frontendUrl: 'http://localhost:3000',
};
