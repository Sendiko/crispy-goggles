//* Init mongoose
const mongoose = require('mongoose')

const mongoDB = async function main (){
   await mongoose.connect('mongodb://localhost:27017/praktikumKK4C')
   console.log('DB Connected')
}

module.exports = mongoDB
