const port = process.env.PORT || 5000;
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, 'client')))
server.use(express.static(path.join(__dirname, '/../', 'node_modules')))

server.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'client')})
})

server.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

server.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.server.get('env') === 'development' ? err : {}
  console.log(err)
  res.status(err.status || 500)
  res.json(err)
})

server.listen(port, () => {
  console.log('Listening on port', port);
})

module.exports = server
