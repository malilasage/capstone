const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
  title: {
    type: String, default: null
  },
  description: {
    type: String, default: null
  },
  company: {
    type: String, default: null
  },
  url: {
    type: String, default: null
  },
  location: {
    type: String, default: null
  },
  notes: {
    type: String, default: null
  },
    tasks: {
      resumeStatus: {
        type: String, default: "fa-minus"
      },
      coverLetterStatus: {
        type: String, default: "fa-minus"
      },
      interview: {
        status: {
          type: String, default: "fa-minus"
        },
        date: {
          type: String, default: "fa-minus"
        }
      },
      deadline: {
        type: String, default: "fa-minus"
      }
    },
  createdAt: { type: Date, default: Date.now}
});

module.exports = JobsSchema;
