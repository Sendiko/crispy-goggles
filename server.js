const express = require('express')
const app = express()
const connectDB = require('./config/db')
const userRoute = require('./router/users')

const port = 3000

app.use(express.json()) //* To parse JSON
app.use(express.urlencoded({extended : true})) //* To parse application form url encoded

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.use(userRoute)
connectDB()

app.listen(port, () => {
	console.log(`Example app listening at ${port}`)
})
