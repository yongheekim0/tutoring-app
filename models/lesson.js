const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  time: String,
  date: Date,
  tutor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tutee: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Lesson', lessonSchema);
