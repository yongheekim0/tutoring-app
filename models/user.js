const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorSchema = new Schema(
  {
    language: {
      type: String,
      enum: ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'],
    },
    photo: String,
    about: String,
    skills: String,
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Firstname cannot be blanked'],
    },
    lastName: {
      type: String,
      required: [true, 'Lastname cannot be blanked'],
    },
    isProfileCreated: {
      type: Boolean,
      default: false,
    },
    interest: [
      {
        type: String,
        enum: ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'],
      },
    ],
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
    tutor: tutorSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
