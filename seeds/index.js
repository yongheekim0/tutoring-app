const mongoose = require('mongoose');
const Lesson = require('../models/lesson');
const User = require('../models/user');
const { users } = require('./tutors');
const tutor = require('../models/tutor');

require('dotenv').config();
// connect to the database with AFTER the config vars are processed
require('../config/database');
require('../config/passport');

// const seedDB = async () => {
//   await Lesson.deleteMany({});

// };

// const seedDB = async () => {
//   await User.deleteMany({});
//   users.forEach(async u => {
//     const user = new User({
//       name: u.name,
//       photo: u.picture,
//       about: u.about,
//       language: 'English',
//     });
//     await user.save();
//   });
// };

// seedDB();
