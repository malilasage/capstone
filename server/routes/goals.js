"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

// router.post('/', isLoggedIn, (req, res) => {
//   User.create({
//     goal: {
//       action: req.body.action,
//       task: req.body.task,
//       time: req.body.time,
//       quantity: req.body.quantity
//     }, (err, data) => {
//     if(err) {throw err};
//     console.log(data);
//     res.send(data);
//   })
// });

router.patch('/', isLoggedIn, (req, res) => {
  User.findByIdAndUpdate(req.session.passport.user,
    { $set: req.body }, { new: true },
    function (err, data) {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/landing');
}

module.exports = router;
