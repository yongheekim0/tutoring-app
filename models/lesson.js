const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  name: String,
  date: Date,
});

module.exports = mongoose.model('Lesson', lessonSchema);
