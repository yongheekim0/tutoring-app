const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  date: Date,
  time: Time,
});

module.exports = mongoose.model('Session', sessionSchema);
