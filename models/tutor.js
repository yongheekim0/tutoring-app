const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    language: [
      {
        type: String,
        enum: ['English', 'Mandarin', 'Fench', 'Japanese', 'Korean', 'Spanish'],
      },
    ],
    photo: String,
    about: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tutor', tutorSchema);
