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
  notes: {
    type: String, default: null
  },
    tasks: {
      resumeStatus: {
        type: String, default: null
      },
      coverLetterStatus: {
        type: String, default: null
      },
      interview: {
        status: {
          type: String, default: null
        },
        date: {
          type: String, default: null
        }
      },
      deadline: {
        type: String, default: null
      }
    },
  createdAt: { type: Date, default: Date.now}
});

module.exports = JobsSchema;
