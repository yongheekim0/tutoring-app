const mongoose = require('mongoose');
const Lesson = require('../models/lesson');
const User = require('../models/user');
const { fakeUsers } = require('./users')

require('dotenv').config();
// connect to the database with AFTER the config vars are processed
require('../config/database');
require('../config/passport');

const seedDB = async () => {
  await User.deleteMany({})
  fakeUsers.forEach( async u => {
    const user = new User(u)
    await user.save()
  })

};
seedDB()

// const languages = ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish']

// fakeUsers.forEach(async user => {
//   const data = new User(user)
//   await data.save()
// })


 

// User.findOneAndUpdate({name: yonghee}, {isProfileCreated: false, interest: ''}).then((result)=> console.log(result))