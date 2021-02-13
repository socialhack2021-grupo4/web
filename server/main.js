process.chdir(__dirname)

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const http = require('http')
const logger = require('./utils/logger')
const constants = require('./constants')
const db = require('./database')
const app = express()

app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const server = http.createServer(app)

server.listen(constants.PORT)

server.on('listening', async function () {
  try {
    await db.setup()
    logger.info('Server running')
  } catch (e) {
    logger.error(e)
  }
})

app.post('/api/experiencies', async function (req, res, next) {
  try {
    const userId = res.body.userId
    const experiences = await db.getExperiencies(userId)
    res.json(experiences)
  } catch (e) {
    next(e)
  }
})
app.post('/api/experience', async function (req, res, next) {
  try {
    const userId = res.body.userId
    const id = res.body.id
    const experience = await db.getExperience(userId, id)
    res.json(experience)
  } catch (e) {
    next(e)
  }
})

app.post('/api/buy', async function (req, res, next) {
  try {
    const userId = res.body.userId
    const id = res.body.id
    const experience = await db.buyExperience(userId, id)
    res.json(experience)
  } catch (e) {
    next(e)
  }
})

