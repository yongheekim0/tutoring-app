const mongoose = require('mongoose');
const Lesson = require('../models/lesson');
const Tutor = require('../models/tutor');
const { tutors } = require('./tutors');
const tutor = require('../models/tutor');

require('dotenv').config();
// connect to the database with AFTER the config vars are processed
require('../config/database');
require('../config/passport');

// const seedDB = async () => {
//   await Lesson.deleteMany({});

// };

const seedDB = async () => {
  await Tutor.deleteMany({});
  tutors.forEach(async t => {
    const tutor = new Tutor({
      name: t.name,
      photo: t.picture,
      about: t.about,
      language: 'English',
    });
    await tutor.save();
  });
};

seedDB;
