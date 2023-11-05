const express = require('express');
const router = express.Router();
const tutorsControl = require('../controllers/tutors');

router.get('/', tutorsControl.index);

router.get('/new', tutorsControl.new)

router.post('/', tutorsControl.create)

module.exports = router;
