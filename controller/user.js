const users = require('../models/user')

module.exports = {
	data : async (req, res) => {
		try {
			const user = await users.find()
			if(user.length > 0){
					res.status(200).json({
						status : true,
						data : user,
						method : req.method,
						url : req.url
					})
			}else{
					res.status(200).json({
						status : false,
						data : "No data",
						method : req.method,
						url : req.url
					})
			}
		} catch (error) {
			console.log(error.body)
			res.status(400).json({
					status : false,
					data : error,
					method : req.method,
					url : req.url
			})
		}
	},
	index : async (req, res) => {
		try {
			const user = await users.findById(req.params.id, req.body, {
				new : true, 
				runValidators : true, 
			})
			res.status(200).json({
				status : true,
				message : "Data berhasil diubah",
				data : user,
				method : req.method,
				url : req.url
			})
		} catch (error) {
			res.status(500).json({
				status : false,
				data : error,
				method : req.method,
				url : req.url
			})
		}
	},
	store : async (req, res) => {
		try {
			const userr = users.create(req.body)		
			res.status(201).json({
				status : true,
				message : "Data berhasil ditambahkan",
				data : userr,
				method : req.method,
				url : req.url
			})
		} catch (error) {
			res.status(500).json({
				status : false,
				data : error,
				method : req.method,
				url : req.url
			})
		}
	},
	update : async (req, res) => {
		try {
			const user = await users.findByIdAndUpdate(req.params.id, req.body, {
				new : true, 
				runValidators : true, 
			})
			res.status(200).json({
				status : true,
				message : "Data berhasil diubah",
				data : user,
				method : req.method,
				url : req.url
			})
		} catch (error) {
			res.status(500).json({
				status : false,
				data : error,
				method : req.method,
				url : req.url
			})
		}
	},
	delete : async (req, res) => {
		try {
			await users.findByIdAndDelete(req.params.id)	
			res.json({
				status : true,
				message : "Data berhasil dihapus",
				data : "",
				method : req.method,
				url : req.url
			})
		} catch (error) {
			res.status(500).json({
				status : false,
				data : error,
				method : req.method,
				url : req.url
			})
		}
	}
}
