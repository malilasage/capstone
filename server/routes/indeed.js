"use strict";

const express = require('express');
const router = express.Router();
const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

router.get('/', (req, res) => {
  let searchInfo = {
    job: encodeURIComponent(req.query.job),
    location: encodeURIComponent(req.query.location)
  };

  const newUrl = `http://api.indeed.com/ads/apisearch?publisher=${process.env.INDEED_KEY || 331559334344654}&q=${searchInfo.job}&l=${searchInfo.location}&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=localhost:3000&useragent=Mozilla%2F5.0+(Macintosh%3B+Intel+Mac+OS+X+10_11_6)+AppleWebKit%2F537.36+(KHTML%2C+like+Gecko)+Chrome%2F55.0.2883.95+Safari%2F537.36&v=2&format=json`;

  return request(newUrl).pipe(res);
});

router.get('/new', (req, res) => {
  // res.send('cool');
  // return request(req.params.url).pipe(res);
  // let $ = cheerio.load(req.params.url);
  return request(req.query.url, (err, response, html) => {
    let $ = cheerio.load(html);
    res.send('cool');
  })
})

module.exports = router;
