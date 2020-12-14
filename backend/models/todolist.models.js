const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
	
	task : {
		type : String
	},

});

const Note = mongoose.model('Note', notesSchema);
module.exports = Note;