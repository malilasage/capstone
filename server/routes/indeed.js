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

  const newUrl = `http://api.indeed.com/ads/apisearch?publisher=${process.env.INDEED_KEY}&q=${searchInfo.job}&l=${searchInfo.location}&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=localhost:3000&useragent=Mozilla%2F5.0+(Macintosh%3B+Intel+Mac+OS+X+10_11_6)+AppleWebKit%2F537.36+(KHTML%2C+like+Gecko)+Chrome%2F55.0.2883.95+Safari%2F537.36&v=2&format=json`;

  return request(newUrl).pipe(res);
});

router.get('/new', (req, res) => {
  // res.send('cool');
  // return request(req.params.url).pipe(res);
  // let $ = cheerio.load(req.params.url);
  return request(req.query.url, (err, response, html) => {
    var $ = cheerio.load(html);
    var description = $('#job_summary').text();
    var title = $('.jobtitle').text();
    var company = $('.company').text();
    var location = $('.location').text();
    var url = req.query.url;

    User.findById(req.session.passport.user, (err, data) => {
      if(err) throw err;
      else {
        data.jobs.push({
          title,
          description,
          company,
          url,
          location
        });
        data.save((err, data) => {
            if (err) throw err;
            var index = data.jobs.length - 1;
            res.send(data.jobs[index]);
          })
        }
    })
  })
})

module.exports = router;
