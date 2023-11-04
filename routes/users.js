var express = require('express');
var router = express.Router();
const User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users/mypage', { title: 'my page' });
});
router.get('/new', function (req, res, next) {
  res.render('users/new', { title: 'Register your info' });
});

router.post('/', function (req, res, next) {
})

router.get('/edit', function (req, res, next) {
  res.render('users/edit', { title: 'Edit your info' });
});

module.exports = router;
