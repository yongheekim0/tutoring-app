var express = require('express');
var router = express.Router();
const User = require('../models/user');
const languages = ['English', 'Mandarin', 'French', 'Japanese', 'Korean', 'Spanish'];
/* GET users listing. */
router.get('/', function (req, res) {
  res.render('users/index');
});
router.get('/new', function (req, res) {
  if (req.user.isProfileCreated) {
    res.redirect('/');
  } else {
    res.render('users/new', { languages });
  }
});

router.post('/', async function (req, res) {
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
  res.render('users/edit', { languages });
});

router.put('/', async (req, res) => {
  await User.updateOne({ googleId: req.user.googleId }, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    interest: req.body.interest,
    email: req.body.email,
  });
  res.redirect('/users')
});

module.exports = router;
