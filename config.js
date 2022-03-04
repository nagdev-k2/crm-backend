const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/inseer';

mongoose.Promise = global.Promise;
mongoose.connect(URL, { useNewUrlParser: true })
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((error) => {
    throw error;
  })

const db = mongoose.connection;
module.exports = db;