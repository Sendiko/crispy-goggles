
const express = require('express')
const router = express.Router()

const users = [
    {
        id : 1, 
        nama : "Jisoo Kim", 
        group : "BLACKPINK"
    },
    {
        id : 2, 
        nama : "Jennie Kim", 
        group : "BLACKPINK"
    },
    {
        id : 3, 
        nama : "Chaeyoung Park", 
        group : "BLACKPINK"
    },
    {
        id : 4, 
        nama : "Lalisa Manoban", 
        group : "BLACKPINK"
    },
]

router.get('/users', (req, res) => {
    res.json(users)
})

router.post('/users', (req, res) => {
    users.push(req.body)
    res.json(users)
})

router.put('/users/:id', (req, res) => {
    const id = req.params.id
    users.filter(user => {
        if(user.id == id){
            user.nama = req.body.nama
            user.group = req.body.group
            return user
        }
    })
    res.json(users)
})

router.delete('/users/:id', (req, res) => {
    res.send('Got a delete request at /users')
})

module.exports = router
