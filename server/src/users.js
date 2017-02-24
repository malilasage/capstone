const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JobsSchema = require('./jobs_schema');

const UserSchema = new Schema({
  firstName: {
    type: String,
    validate: {
      validator: (firstName) => firstName.length > 0,
      message: 'user must have a first name'
    }
  },
  lastName: {
    type: String,
    validator: (lastName) => lastName.length > 0,
    message: 'user must have a last name'
  },
  hashedPassword: {
    type: String,
    validate: {
      validator: (hashedPassword) => hashedPassword.length === 16,
      message: 'if ur password isnt 16 characters, its probably not hashed'
    },
    required: [true, 'password is required']
  },
  createdAt: { type: Date, default: Date.now},
  jobs: [JobsSchema]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
