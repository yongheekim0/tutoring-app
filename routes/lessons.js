const express = require('express')
const router = express.Router()

const lessonsControl = require('../controllers/lessons')


router.get('/', lessonsControl.index )
router.post('/', lessonsControl.create)
router.get('/:id', lessonsControl.delete)
//router.get('/:id/cancel', lessonsControl.update)


module.exports = router