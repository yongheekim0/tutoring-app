const User = require('../models/user');
const Lesson = require('../models/lesson');
const languages = ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'];

const index = async (req, res) => {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  const lessons = await Lesson.find({ tutor: req.user._id });
  // const lessons = await Lesson.find({'tutee.googleId': req.user.googldId})
  // res.send(lessons)
  res.render('lessons/index', { lessons });
};

const create = async (req, res) => {
  const lesson = new Lesson({
    time: req.body.time,
    date: req.body.date,
    tutor: req.user._id,
  });
  await lesson.save();
  res.redirect('/lessons');
};

module.exports = {
  index,
  create,
};
