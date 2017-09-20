'use strict';
const http = require('http');
const requestParser = require('./request-parser.js');

const app = http.createServer((req, res) => {
  requestParser(req)
  .then(req =>{
    if(req.method === 'GET' && req.url.pathname === '/'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`<!DOCTYPE html>
        <!DOCTYPE html>
<html>
  <head>
    <title> cowsay </title>
  </head>
  <body>
    <h1> cowsay </h1>
    <pre>
      <!-- cowsay.say({text: req.url.query.text}) -->
    </pre>
  </body>
</html>`);
      res.end();
      return;
    }
    if(req.method === 'POST' && req.url.pathname === 'echo'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(req.body));
      res.end();
      return;
    }
    res.writeHead(404,{
      'Content-Type': 'text/plain'
    });
    res.write(`resource ${req.url.pathname} not found!`);
    res.end();
  })
    .catch(err => {
      console.log(err);
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.write('bad request');
      res.end();
    });
});

  //export interface
  module.exports = {
    start: (port, callback) => app.listen(port, callback),
    stop: (callback) => app.close(callback),
  };
