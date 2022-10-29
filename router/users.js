
const express = require('express')
const router = express.Router()

const userController = require('../controller/user')

router.get('/users', userController.data)

router.get('/users/:id', userController.index)

router.post('/users', userController.store)

router.put('/users/:id', userController.update)

router.delete('/users/:id', userController.delete)

module.exports = router
