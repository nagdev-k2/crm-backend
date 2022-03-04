const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: false
  },
  company: {
    type: String,
    required: false
  },
  role: {
    type: String,
    required: false
  },
  profile: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('users', UserSchema)