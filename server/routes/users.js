"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

router.get('/', isLoggedIn, (req, res) => {
  User.find((err, data) => {
    console.log(req.session.passport.user);
    if(err) { throw err; }
    else {
      res.send(data);
    }
  })
});

//gets all of a users data
router.get('/getuser', isLoggedIn, (req, res) => {
  User.findById(req.session.passport.user, (err, data) => {
    if(err) { res.send(404) }
    if(data === null) { res.send(404) }
    else {
      res.send(data);
    }
  })
});

//create new user
router.post('/', isLoggedIn, (req, res) => {
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
router.patch('/', isLoggedIn, (req, res) => {
  User.findByIdAndUpdate(req.session.passport.user,
    { $set: req.body }, { new: true },
    function (err, data) {
      if (err) throw err;
      res.send(data);
    });
});

//delete user
router.delete('/', isLoggedIn, (req, res) => {
  User.findById(req.session.passport.user, (err, data) => {
    if(err) throw err;
    data.remove((err, data) => {
      if(err) throw err;
      res.send(data);
    })
  })
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/landing');
}

module.exports = router;
