const User = require('../models/user');
const languages = [
  'English',
  'Mandarin',
  'Fench',
  'Japanese',
  'Korean',
  'Spanish',
];
const index = async (req, res) => {
  const { tutor: tutors } = await User.find({ isATutor: true });
  res.render('tutors/index', { tutors });
};

const newTutor = (req, res) => {
  res.render('tutors/new', { languages });
};

const create = async (req, res) => {
  await User.updateOne(
    { googleId: req.user.googleId },
    { isATutor: true, tutor: req.body }
  );
  res.redirect('/users');
};

module.exports = {
  index,
  new: newTutor,
  create,
};
