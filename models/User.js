const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
	firstname: {
		type: String, 
		select: false,
		trim: true,
		required: true
	},
	lastname: {
		type: String, 
		required: true
	},
	emailaddress: {
		type: String, 
		unique: true,
		match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
		required: true
	},
	password: {
		type: String, 
		required: true,
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]	
	}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);



