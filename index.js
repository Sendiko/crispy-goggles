const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/users', (req, res) => {
    res.send('Got all user data')
})

app.post('/users', (req, res) => {
    res.send('Got a post request at /users')
})

app.put('/users/:id', (req, res) => {
    res.send('Got a put request at /users')
})

app.delete('/users/:id', (req, res) => {
    res.send('Got a delete request at /users')
})

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})
