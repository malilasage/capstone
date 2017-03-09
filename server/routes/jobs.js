"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

//get all of a users jobs
router.get('/', isLoggedIn, (req, res) => {
  User.findById(req.session.passport.user, (err, data) => {
    if(err) { res.send(404) }
    if(data === null) { res.send(404) }
    else {
      res.send(data.jobs);
    }
  })
});

//get all data for a specific job
router.get('/job/:id', isLoggedIn, (req, res) => {
  User.findOne({'jobs._id': req.params.id}, {'jobs.$': '1'},
    function(err, data){
      if(err) { throw err; }
      if(data === null) { res.send(404) }
      res.send(data.jobs[0]);
    })
});

//create a new job
router.post('/', isLoggedIn, (req, res) => {
  User.findById(req.session.passport.user, (err, data) => {
    if(err) throw err;
    if(!req.body.title) { res.send(400) }
    else {
      var { title, description, company, notes, url, location } = req.body;
      data.jobs.push({
        title,
        description,
        company,
        notes,
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
});

//update tasks for a specific job
router.patch('/:id', isLoggedIn, (req, res) => {
  User.findOne({'jobs._id': req.params.id}, {'jobs.$': '1'},
    function(err, data){
      if(err) { throw err; }
      if(data === null) { res.send(404) }
      updateData(data.jobs[0], req.body, (set) => {
        User.update({'_id': req.session.passport.user, 'jobs._id': req.params.id}, {$set: {'jobs.$': set}}, (err, nSaved) => {
          if(err) { throw err; }
          // res.send(nSaved);
          User.findOne({'jobs._id': req.params.id}, {'jobs.$': '1'},
            function(err, data){
              if(err) { throw err; }
              if(data === null) { res.send(404) }
              res.send(data.jobs[0]);
            })
        })
      });
    });
  function updateData(data, body, callback) {
    if(body.title !== undefined) {
      data.title = body.title;
    }
    if(body.company !== undefined) {
      data.company = body.company;
    }
    if(body.description !== undefined) {
      data.description = body.description;
    }
    if(body.notes !== undefined) {
      data.notes = body.notes;
    }
    if(body.location !== undefined) {
      data.location = body.location;
    }
    if(body.url !== undefined) {
      data.url = body.url;
    }
    if(body.column !== undefined) {
      data.column = body.column;
    }
    if(body.tasks !== undefined) {
      if(body.tasks.coverLetterStatus !== undefined) {
        data.tasks.coverLetterStatus = body.tasks.coverLetterStatus;
      }
      if(body.tasks.resumeStatus !== undefined) {
        data.tasks.resumeStatus = body.tasks.resumeStatus;
      }
      if(body.tasks.deadline !== undefined) {
        data.tasks.deadline = body.tasks.deadline;
      }
      if(body.tasks.interview !== undefined) {
        if(body.tasks.interview.date !== undefined) {
          data.tasks.interview.date = body.tasks.interview.date;
        }
        if(body.tasks.interview.status !== undefined) {
          data.tasks.interview.status = body.tasks.interview.status;
        }
      }
    }
    return callback(data);
  }
})

//delete a job
router.delete('/:id', isLoggedIn, (req, res) => {
  var jobId = req.params.id;
  User.findById(req.session.passport.user, (err, data) => {
    if(err) throw err;
    else {
      data.jobs.pull({_id: jobId});
      data.save((err, data) => {
        if (err) throw err;
        res.send(data);
      })
    }
  })
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/landing');
}

module.exports = router;
