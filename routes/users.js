var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res) {
  res.render('users/index');
});
router.get('/new', function (req, res) {
  if (req.user.isProfileCreated) {
    res.redirect('/');
  } else {
    res.render('users/new');
  }
});

router.post('/', async function (req, res) {
  await User.updateOne(
    { googleId: req.user.googleId },
    {
      name: req.body.name,
      interest: req.body.interest,
      email: req.body.email,
      isProfileCreated: true,
    }
  );
  res.redirect('/');
});

router.get('/edit', function (req, res) {
  res.render('users/edit', { title: 'Edit your info' });
});

module.exports = router;
