
const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    res.send('Got all user data')
})

router.post('/users', (req, res) => {
    res.send('Got a post request at /users')
})

router.put('/users/:id', (req, res) => {
    res.send('Got a put request at /users')
})

router.delete('/users/:id', (req, res) => {
    res.send('Got a delete request at /users')
})

module.exports = router
