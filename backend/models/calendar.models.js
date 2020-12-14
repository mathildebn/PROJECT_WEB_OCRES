const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
	
	name : {
		type : String
	},
	start : {
		type : String
	},
	end : {
		type : String
	}
});


module.exports = mongoose.model('Event', EventSchema);