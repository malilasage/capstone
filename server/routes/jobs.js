"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

//get all of a users jobs
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if(err) { res.send(404) }
    if(data === null) { res.send(404) }
    else {
      res.send(data.jobs);
    }
  })
});

//get all data for a specific job
router.get('/job/:id', (req, res) => {
  User.findOne({'jobs._id': req.params.id}, {'jobs.$': '1'},
    function(err, data){
      if(err) { throw err; }
      if(data === null) { res.send(404) }
      res.send(data.jobs[0]);
    })
});

//create new job
router.post('/:userid', (req, res) => {
  User.findById(req.params.userid, (err, data) => {
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
router.patch('/:userid/:id', (req, res) => {
  User.findOne({'jobs._id': req.params.id}, {'jobs.$': '1'},
    function(err, data){
      if(err) { throw err; }
      if(data === null) { res.send(404) }
      updateData(data.jobs[0], req.body, () => {
        //arg data is removing all jobs besides updated one
        User.update({'jobs._id': req.params.id}, data, (err, savedData) => {
          if(err) { throw err; }
          res.send(savedData)
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
    return callback();
  }
})

//delete a job
router.delete('/:userid/:id', (req, res) => {
  var jobId = req.params.id;
  User.findById(req.params.userid, (err, data) => {
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

module.exports = router;
