'use strict'

require('dotenv').config()

const server = require('./lib/server.js')

server.start(process.env.POST, () =>
  console.log('Entering port: ',process.env.POST
))
