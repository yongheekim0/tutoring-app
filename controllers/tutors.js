const User = require('../models/user');

const index = async (req, res) => {
  const tutors = await User.find({});
  res.render('tutors/index', { tutors, title: 'Tutors' });
};

module.exports = {
  index,
};
