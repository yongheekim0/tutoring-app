const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  name: String,
  date: Date,
  tutor: {
    type: Schema.Types.ObjectId,
    ref: 'Tutor',
  },
});

module.exports = mongoose.model('Lesson', lessonSchema);
