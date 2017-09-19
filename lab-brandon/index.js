'use strict';

require('dotenv').config();

const server = require('./lib/server.js');

server.start(process.env.PORT, () =>
  console.log('server starting on: ', process.env.PORT));
