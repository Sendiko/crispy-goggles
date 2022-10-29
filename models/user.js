const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	nama : {
		type : String,
		required : [true, 'Please insert your name'],
		unique : true, 
	},
	email : {
		type : String,
		required : true, 
		unique : true,
		match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],

	}
})

module.exports = mongoose.model('user', userSchema)
