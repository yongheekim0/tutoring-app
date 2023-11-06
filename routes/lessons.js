const express = require('express')
const router = express.Router()

const lessonsControl = require('../controllers/lessons')


router.get('/', lessonsControl.index )


module.exports = router