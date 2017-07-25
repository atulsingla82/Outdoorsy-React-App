var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var AdventureSchema = new Schema ({
	userId: {
		type: String,
		required: false
	},
	location: {
		type: String,
		required: true
	},
	activity: {
		type: String, 
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	// time: {
	// 	type: String // is this correct?
	// },
	invitees: {
		type: Array,
		required: false
	}
})


module.exports = mongoose.model("Adventure", AdventureSchema);