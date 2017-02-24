//database
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/capstone');

mongoose.connection.on('error', () => {
  console.log('mongo connection failed')})
  .once('open', () => {console.log('mongo is lit')});

//server
const port = process.env.PORT || 5000;
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './client')))
server.use(express.static(path.join(__dirname, '/../', 'node_modules')))

server.use('/user', require('./routes/users'))

server.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: './client'})
})

server.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

server.listen(port, () => {
  console.log('Listening on port', port);
})

module.exports = server
