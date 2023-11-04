var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users/mypage', { title: 'my page' });
});
router.get('/new', function (req, res, next) {
  res.render('users/new', { title: 'Register your info' });
});
router.get('/edit', function (req, res, next) {
  res.render('users/edit', { title: 'Edit your info' });
});

module.exports = router;
