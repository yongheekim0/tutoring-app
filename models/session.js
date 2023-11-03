const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  name: String,
  date: Date,
});

module.exports = mongoose.model('Session', sessionSchema);
