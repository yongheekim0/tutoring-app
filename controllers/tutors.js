const User = require('../models/user');
const languages = ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'];

const index = async (req, res) => {
  const tutors = await User.find({ isATutor: true });
  res.render('tutors/index', { tutors });
};

const show = async (req, res) => {
  const tutor = await User.findById(req.params.id)
  res.render('tutors/show', { tutor })
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
};
