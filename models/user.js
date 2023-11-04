const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorSchema = new Schema(
  {
    language: [
      {
        type: String,
        enum: ['English', 'Mandarin', 'Fench', 'Japanese', 'Korean', 'Spanish'],
      },
    ],
    photo: String,
    about: String,
    skills: String,
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    name: String,
    isProfileCreated: {
      type: Boolean,
      default: false,
    },
    interest: {
      type: String,
      enum: ['English', 'Mandarin', 'Fench', 'Japanese', 'Korean', 'Spanish'],
      lowercase: true,
    },
    photo: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    isATutor: {
      type: Boolean,
      default: false,
    },
    totor: tutorSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
