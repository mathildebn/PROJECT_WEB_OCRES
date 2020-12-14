const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
	name : {
		type : String
	},
	value : {
		type : String
	}
})

module.exports = mongoose.model('Budget', budgetSchema);