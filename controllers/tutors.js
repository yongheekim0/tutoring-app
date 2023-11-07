const User = require('../models/user');
const Lesson = require('../models/lesson');
const languages = ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'];

const index = async (req, res) => {
  const tutors = await User.find({ isATutor: true });
  res.render('tutors/index', { tutors });
};

const show = async (req, res) => {
  const tutor = await User.findById(req.params.id);
  const lessons = await Lesson.find({ tutor: req.params.id });
  res.render('tutors/show', { tutor, lessons });
};

const bookLesson = async (req, res) => {
  const tutor = await User.findById(req.params.id);
  await Lesson.findOneAndUpdate({tutor: req.params.id, _id: req.params.lesson}, {tutee: req.user._id, tuteeName: req.user.firstName})
  res.redirect(`/tutors/${tutor._id}`)
}

const newTutor = (req, res) => {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  res.render('tutors/new', { languages });
};

const create = async (req, res) => {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  await User.updateOne({ googleId: req.user.googleId }, { isATutor: true, tutor: req.body });
  res.redirect('/');
};

module.exports = {
  index,
  show,
  new: newTutor,
  create,
  update: bookLesson,
};
