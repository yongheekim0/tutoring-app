const User = require('../models/user');
const Lesson = require('../models/lesson');
const languages = ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'];

const index = async (req, res) => {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  const lessons = await Lesson.find({ tutor: req.user._id });
  const myLessons = await Lesson.find({ tutee: req.user._id });
  res.render('lessons/index', { lessons, myLessons });
};

const create = async (req, res) => {
  const lesson = new Lesson({
    time: req.body.time,
    date: req.body.date,
    tutor: req.user._id,
    tutorName: req.user.firstName,
    language: req.user.tutor.language,
  });
  await lesson.save();
  res.redirect('/lessons');
};

const deleteLesson = async (req, res) => {
    if(req.user.isATutor) {
      await Lesson.findByIdAndDelete(req.params.id);
      res.redirect('/lessons');
    } else {    
    const lessonEnrolled = await Lesson.findById(req.params.id)
    lessonEnrolled.tutee = null
    lessonEnrolled.tuteeName = null
    await lessonEnrolled.save()
    res.redirect('/lessons')
}
};

module.exports = {
  index,
  create,
  delete: deleteLesson,
};
