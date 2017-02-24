const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
  title: String,
  description: String,
  company: String,
  notes: String,
  tasks: {
    resumeStatus: String,
    coverLetterStatus: String,
    interview: {
      status: String,
      date: String
    },
    deadline: String
  },
  createdAt: { type: Date, default: Date.now}
});

module.exports = JobsSchema;
