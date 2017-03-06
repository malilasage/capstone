//database
const mongoose = require('mongoose');
require('dotenv').load();

mongoose.Promise = require('bluebird');
console.log(process.env);
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', () => {
  console.log('mongo connection failed')})
  .once('open', () => {console.log('mongo is lit')});

//server
const request = require('request');
const port = process.env.PORT;
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './client')))
server.use(express.static(path.join(__dirname, '/../', 'client')))
server.use(express.static(path.join(__dirname, '/../', 'node_modules')))

server.use('/user', require('./routes/users'))
server.use('/jobs', require('./routes/jobs'))
server.use('/indeed', require('./routes/indeed'))

server.get('/glassdoor', (req, res) => {
  let searchInfo = {
    company: encodeURIComponent(req.query.company)
  };

  const newUrl = `http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=128556&t.k=kjwbHdKegvO&action=employers&q=${searchInfo.company}&userip=208.184.3.194&useragent=Mozilla/%2F4.0`;

  return request(newUrl).pipe(res);
});

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
