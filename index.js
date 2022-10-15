const express = require('express')
const app = express()
const userRoute = require('./router/users')

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use(userRoute)

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})
