const express = require('express');
const router = express.Router();
const tutorsControl = require('../controllers/tutors');

router.get('/', tutorsControl.index);
router.get('/new', tutorsControl.new)
router.get('/:id', tutorsControl.show)
router.get('/:id/:lesson', tutorsControl.update)
router.post('/', tutorsControl.create)

module.exports = router;
