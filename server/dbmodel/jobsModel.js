const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobs');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true
  },
  jobDescription: String,
  company: {
    type: String,
    required: true
  },
  url: String,
  status: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})
