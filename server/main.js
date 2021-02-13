process.chdir(__dirname)

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const http = require('http')
const logger = require('./utils/logger')
const constants = require('./constants')
const app = express()

app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const server = http.createServer(app)

server.listen(constants.PORT)

server.on('listening', function () {
  logger.info('Server running')
})

app.use('/', function (req, res) {
  res.json({ a: 1 })
})
