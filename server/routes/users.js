"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

router.get('/', (req, res) => {
  User.find((err, data) => {
    if(err) { throw err; }
    else {
      res.send(data);
    }
  })
});

//gets all of a users data
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    console.log(req.params.id);
    if(err) { res.send(404) }
    if(data === null) { res.send(404) }
    else {
      res.send(data);
    }
  })
});

//create new user
router.post('/', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    hashedPassword: req.body.hashedPassword
  }, (err, data) => {
    if(err) {throw err};
    res.send(data);
  })
});

//update user info
router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id,
    { $set: req.body }, { new: true },
    function (err, data) {
      if (err) throw err;
      res.send(data);
    });
});

//delete user
router.delete('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if(err) throw err;
    data.remove((err, data) => {
      if(err) throw err;
      res.send(data);
    })
  })
});

module.exports = router;
