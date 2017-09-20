'use strict';
const http = require('http');
const requestParser = require('./request-parser.js');
const cowsay = require('cowsay');
const app = http.createServer((req, res) => {
  requestParser(req)
  .then(req =>{
    let cowss = { text: 'The End is Naaaayy!!'};
    if(req.url.query.text)
      cowss = req.url.query;
    if(req.method === 'GET' && req.url.pathname === '/'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`
        <!DOCTYPE html>
<html>
  <head>
    <title> cowsay </title>
  </head>
  <body>
    <h1> Cow says what!? </h1>
    <pre>
      ${cowsay.say(cowss)}
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
      'Content-Type': 'text/plain',
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
