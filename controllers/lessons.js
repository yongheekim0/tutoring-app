const User = require('../models/user');
const Lesson = require('../models/lesson')
const languages = ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'];


const index = (req, res) => {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  res.render('lessons/index')

}


module.exports = {
  index,
}