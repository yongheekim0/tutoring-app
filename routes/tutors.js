const express = require('express');
const router = express.Router();
const tutorsControl = require('../controllers/tutors');

router.get('/', tutorsControl.index);

module.exports = router;
