const mongoose = require('mongoose');
const Session = require('../models/session');

require('dotenv').config();
// connect to the database with AFTER the config vars are processed
require('../config/database');
require('../config/passport');

const seedDB = async () => {
  await Session.deleteMany({});
  const c = new Session({ name: 'English' });
  await c.save();
};

seedDB();
