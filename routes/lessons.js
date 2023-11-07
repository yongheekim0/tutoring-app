const express = require('express')
const router = express.Router()

const lessonsControl = require('../controllers/lessons')


router.get('/', lessonsControl.index )
router.post('/', lessonsControl.create)


module.exports = router