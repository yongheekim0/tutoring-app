const mongoose = require('mongoose');
const Lesson = require('../models/lesson');

require('dotenv').config();
// connect to the database with AFTER the config vars are processed
require('../config/database');
require('../config/passport');

const seedDB = async () => {
  await Lesson.deleteMany({});
  const c = new Lesson({ name: 'English' });
  await c.save();
};

seedDB();
