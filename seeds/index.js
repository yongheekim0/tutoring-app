const mongoose = require('mongoose');
const Lesson = require('../models/lesson');
const User = require('../models/user');

const { users } = require('./tutors');

require('dotenv').config();
// connect to the database with AFTER the config vars are processed
require('../config/database');
require('../config/passport');

// const seedDB = async () => {
//   await Lesson.deleteMany({});

// };

const seedDB = async () => {
  await User.create({googleId: "234"})
};

seedDB();
// User.findOneAndUpdate({name: yonghee}, {isProfileCreated: false, interest: ''}).then((result)=> console.log(result))