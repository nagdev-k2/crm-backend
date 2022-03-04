const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  title: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('roles', UserSchema)