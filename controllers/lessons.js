const User = require('../models/user');
const Lesson = require('../models/lesson')
const languages = ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'];


const index = async (req, res) => {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  // const lessons = await Lesson.find({'tutee.googleId': req.user.googldId})
  // res.send(lessons)
  res.render('lessons/index')

}


module.exports = {
  index,
}