"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

router.get('/', (req, res) => {
  res.send('coolio');
});

module.exports = router;
