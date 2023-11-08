var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Lesson = require('../models/lesson');
const languages = ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'];
/* GET users listing. */
router.get('/', async function (req, res) {
  if (!req.user) {
    res.redirect('/auth/google');
  } else {
    const lessons = await Lesson.find({ tutee: req.user._id });
    res.render('users/index', { lessons });
  }
});
router.get('/new', function (req, res) {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  if (req.user && req.user.isProfileCreated) {
    res.redirect('/');
  } else if (req.user) {
    res.render('users/new', { languages });
  }
});

router.post('/', async function (req, res) {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  await User.updateOne(
    { googleId: req.user.googleId },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      interest: req.body.interest,
      email: req.body.email,
      isProfileCreated: true,
    }
  );
  res.redirect('/');
});

router.get('/edit', async function (req, res) {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  const lessonEnrolled = await Lesson.find({ tutee: req.user._id });
  const lessonTeach = await Lesson.find({ tutor: req.user._id });
  //res.send(lessonEnrolled)
  res.render('users/edit', { languages, lessonEnrolled, lessonTeach });
});

router.put('/', async (req, res) => {
  if (!req.user) {
    res.redirect('/auth/google');
  } else {
    await User.updateOne(
      { googleId: req.user.googleId },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        interest: req.body.interest,
        email: req.body.email,
        'tutor.language': req.body.language,
        'tutor.about': req.body.about,
        'tutor.skills': req.body.skills,
        'tutor.photo': req.body.photo,
      }
    );
    res.redirect('/users');
  }
});

router.delete('/', async (req, res) => {
  if (!req.user) {
    res.redirect('/auth/google');
  }

  // if(lessonEnrolled || lessonTeach) {
  //   res.redirect('/')
  // }
  await User.findOneAndDelete({ googleId: req.user.googleId });
  res.redirect('/');
});

module.exports = router;
