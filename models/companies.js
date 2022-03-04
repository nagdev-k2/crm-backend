const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComapniesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: false,
  },
  industry: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('companies', ComapniesSchema)