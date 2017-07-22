var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

var AdventureSchema = new Schema ({
	userId: {
		type: String,
		required: true
	},
	activityType: {
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

AdventureSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Adventure", AdventureSchema);