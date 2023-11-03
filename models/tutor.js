const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tutor = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    language: [
      {
        type: String,
        enum: ['English', 'Mandarin', 'Fench', 'Japanese', 'Korean', 'Spanish'],
        required: true,
      },
    ],
    photo: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);
