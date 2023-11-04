const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    isProfileCreated: {
      type: Boolean,
      default: false,
    },
    interest: {
      type: String,
      enum: ['Science', 'Language', 'Math', 'Self Develpment', 'Others'],
      lowercase: true,
    },
    photo: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
