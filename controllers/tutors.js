const User = require('../models/user');

const index = async (req, res) => {
  const { tutor: tutors } = await User.find({ isATutor: true });
  res.render('tutors/index', { tutors });
};

const newTutor = (req, res) => {
  res.render('tutors/new')
}

const create = async (req, res) => {
  res.send('Post request')
}

module.exports = {
  index,
  new: newTutor,
  create,
};
