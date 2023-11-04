const Tutor = require('../models/tutor');

const index = async (req, res) => {
  const tutors = await Tutor.find({});
  res.render('tutors/index', { tutors, title: 'Tutors' });
};

module.exports = {
  index,
};
