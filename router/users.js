
const express = require('express')
const router = express.Router()

let users = [
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
    if(users.length > 0){
        res.json({
            status : true,
            data : users,
            method : req.method,
            url : req.url
        })
    }else{
        res.json({
            status : false,
            data : "No Data",
            method : req.method,
            url : req.url
        })
    }
})

router.post('/users', (req, res) => {
    users.push(req.body)
    res.json({
        status : true,
        message : "Data berhasil ditambahkan",
        data : users,
        method : req.method,
        url : req.url
    })
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
    
    res.json({
        status : true,
        message : "Data berhasil diubah",
        data : users,
        method : req.method,
        url : req.url
    })
})

router.delete('/users/:id', (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id != id)

    res.json({
        status : true,
        message : "Data berhasil dihapus",
        data : users,
        method : req.method,
        url : req.url
    })
})

module.exports = router
