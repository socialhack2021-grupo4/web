process.chdir(__dirname)

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const http = require('http')
const logger = require('./utils/logger')
const constants = require('./constants')
const main = require('./main')
const app = express()
const cors = require('cors')

app.use(morgan('combined'))
app.use(cors())

app.use(bodyParser.json({
  verify: function (req, res, buf) {
    var url = req.originalUrl
    if (url.startsWith('/webhook')) {
      req.rawBody = buf.toString()
    }
  }
}))
app.use(bodyParser.urlencoded({ extended: false }))

const server = http.createServer(app)

server.listen(constants.PORT)

server.on('listening', async function () {
  try {
    await main.setup()
    logger.info('Server running')
  } catch (e) {
    logger.error(e)
  }
})

app.post('/api/experiencies', async function (req, res, next) {
  try {
    const userId = req.body.userId
    console.log(req.body)
    const experiences = await main.getExperiencies(userId)
    res.json(experiences)
  } catch (e) {
    next(e)
  }
})
app.post('/api/experience', async function (req, res, next) {
  try {
    const userId = req.body.userId
    const id = req.body.id
    const experience = await main.getExperience(userId, id)
    res.json(experience)
  } catch (e) {
    next(e)
  }
})

app.post('/api/start-buy', async function (req, res, next) {
  try {
    const userId = req.body.userId
    const id = req.body.id
    const session = await main.startBuy(userId, id)
    res.json({ id: session.id })
  } catch (e) {
    next(e)
  }
})
app.post('/webhook', async function (req, res, next) {
  try {
    const signature = req.headers['stripe-signature']
    await main.validateBuy(req.rawBody, signature)
  } catch (e) {
    logger.error(e)
    next(e)
  }
})
