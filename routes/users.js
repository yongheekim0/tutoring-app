var express = require('express');
var router = express.Router();
const User = require('../models/user');
const languages = ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'];
/* GET users listing. */
router.get('/', function (req, res) {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  res.render('users/index');
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

router.get('/edit', function (req, res) {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  res.render('users/edit', { languages });
});

router.put('/', async (req, res) => {
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
    }
  );
  res.redirect('/users');
});

router.delete('/', async (req, res) => {
  if (!req.user) {
    res.redirect('/auth/google');
  }
  await User.findOneAndDelete({ googleId: req.user.googleId });
  res.redirect('/');
});

module.exports = router;
