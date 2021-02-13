const winston = require('winston')

winston.configure({
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
      label: 'main'
    })
  ]
})


module.exports = winston
