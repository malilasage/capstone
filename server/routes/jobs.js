"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

//get all of a users jobs
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    console.log(req.params.id);
    if(err) { res.send(404) }
    if(data === null) { res.send(404) }
    else {
      res.send(data.jobs);
    }
  })
});

//get all data for a specific job
router.get('/:userid/:id', (req, res) => {
  User.findOne({'jobs._id': req.params.id}, {'jobs.$': '1'},
    function(err, data){
      if(err) { throw err; }
      res.send(data.jobs[0]);
    })
});

//create new job
router.post('/:userid', (req, res) => {
  User.findById(req.params.userid, (err, data) => {
    if(err) throw err;
    if(!req.body.title) { res.send(400) }
    else {
      var { title, description, company, notes } = req.body;
      data.jobs.push({
        title,
        description,
        company,
        notes
      });
      data.save((err, data) => {
          if (err) throw err;
          res.send(data);
        })
      }
  })
});

//update tasks for a specific job
router.patch('/:userid/:id', (req, res) => {
  // var jobId = req.params.id;
  // User.findOneAndUpdate(
  //   { "_id": req.params.userid, "jobs._id": jobId },
  //   {
  //     "$set": {
  //       "jobs.$": req.body
  //     }
  //   },
  //   function(err, doc) {
  //     if(err) { throw err; }
  //     res.send(doc)
  //   }
  // )
  // User.findOne({"jobs._id": req.params.id},
  // (err, data) => {
  //   if(err) { throw err; }
  //   res.send(data);
  // })
  // var data = User.jobs.id({"_id": req.params.id});
  // res.send(data);
  User.findOne({'jobs._id': req.params.id}, {'jobs.$': '1'},
  function(err, data){
  res.send(data)
})
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
