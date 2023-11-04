const User = require('../models/user');

const index = async (req, res) => {
  const { tutor: tutors } = await User.find({ isATutor: true });
  res.render('tutors/index', { tutors });
};

module.exports = {
  index,
};
