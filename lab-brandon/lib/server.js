//node dependencies
const http = require('http')
const requestParser = require('./request-parser.js')

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
  res.writeHead(404,{
    'Content-Type': 'text/plain'
    })
  res.write(`resource ${req.url.pathname} not found!`)
  res.end()
  })
  .catch(err => {
    console.log(err)
    res.writeHead(400, { 'Content-Type': 'text/plain' })
    res.write('bad request')
    res.end()
  })
})

//export interface
module.exports = {
  start: (port, callback) => app.listen(port, callback),
  stop: (callback) => app.close(callback),
}
// ///++++++++++++
// // node dependencies
// const http = require('http')
// const requestParser = require('./request-parser.js')
//
// // npm dependencies
// // constants
//
// // functionality
// const app = http.createServer((req, res) => {
//
//   requestParser(req)
//   .then(req => {
//     // handle rotues
//     if(req.method === 'GET' && req.url.pathname === '/'){
//       res.writeHead(200, {'Content-Type': 'text/html'})
//       res.write(`<!DOCTYPE html>
//       <html>
//         <head> <title> cool beans </title> </head>
//         <body> <h1> hello world ${Math.random()}</h1> </body>
//       </html>`)
//       res.end()
//       return  // break out of the (req, res) => {} callback
//     }
//
//     if(req.method === 'POST' && req.url.pathname === '/echo'){
//       res.writeHead(200, {'Content-Type': 'application/json'})
//       res.write(JSON.stringify(req.body))
//       res.end()
//       return  // break out of the (req, res) => {} callback
//     }
//
//
//     res.writeHead(404, {
//       'Content-Type': 'text/plain'
//     })
//     res.write(`resource ${req.url.pathname} not found!`)
//     res.end()
//   })
//   .catch(err => {
//     console.log(err)
//     res.writeHead(400, { 'Content-Type': 'text/plain' })
//     res.write('bad request')
//     res.end()
//   })
//
// })
//
// // export interface
// module.exports = {
//   start: (port, callback) => app.listen(port, callback),
//   stop: (callback) => app.close(callback),
// }
