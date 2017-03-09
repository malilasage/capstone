const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JobsSchema = require('./jobs_schema');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  firstName: {
    type: String
    // validate: {
    //   validator: (firstName) => firstName.length > 0,
    //   message: 'user must have a first name'
    // }
  },
  lastName: {
    type: String
    // validator: (lastName) => lastName.length > 0,
    // message: 'user must have a last name'
  },
  local: {
    email: String,
    password: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  hashedPassword: {
    type: String,
    // validate: {
    //   validator: (hashedPassword) => hashedPassword.length === 16,
    //   message: 'if ur password isnt 16 characters, its probably not hashed'
    // },
    // required: [true, 'password is required']
  },
  createdAt: { type: Date, default: Date.now},
  jobs: [JobsSchema]
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
