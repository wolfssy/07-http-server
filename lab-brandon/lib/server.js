//node dependencies
const http = require('http')
const requestParser = require('./request-parser.js')
//npm dependencies
//constants
//functionality
const app = http.createServer((req, res) => {
  requestParser(req)
  .then(req =>{
    if(req.method === 'GET' && req.url.pathname === '/'){
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(`<!DOCTYPE html>
        <html>
          <head><title>Lab 07</title></head>
          <body><h1> AAyy welcome! </h1></body>
        </html>`)
        res.end()
        return
    }
    if(req.method === 'POST' && req.url.pathname === 'echo'){
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.write(JSON.stringify(req.body))
      res.end()
      return
    }
  })
  res.writeHead()
  res.write()
  res.end()
})
//export interface
module.exports = {
  start:
  stop:
}
