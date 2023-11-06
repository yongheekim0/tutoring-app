const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  date: Date,
  tutor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  tutee: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Lesson', lessonSchema);
