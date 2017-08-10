var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var AdventureSchema = new Schema ({
	userId: {
		type: String,
		required: true
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

})


module.exports = mongoose.model("Adventure", AdventureSchema);