const express = require('express')
const router = express.Router()
const userController = require('./user.controller')

router.post('/add', userController.add)

router.post('/view', userController.view)

router.post('/modify', userController.modify)


module.exports = router