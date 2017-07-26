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
    required: false
  },
  emailaddress: {
    type: String, 
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
    required: false
  },
  password: {
    type: String, 
    unique: true,
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


// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
// 	firstname: {
// 		type: String, 
// 		select: false,
// 		trim: true,
// 		required: true
// 	},
// 	lastname: {
// 		type: String, 
// 		required: false
// 	},
// 	email: { //changed from 'emailaddress'
// 		type: String, 
// 		unique: true,
// 		match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
// 		required: false
// 	},
// 	password: {
// 		type: String, 
// 		unique: true,
// 		required: true,
//     validate: [
//       function(input) {
//         return input.length >= 6;
//       },
//       "Password should be longer."
//     ]	
// 	}
// });


// /**
//  * Compare the passed password with the value in the database. A model method.
//  *
//  * @param {string} password
//  * @returns {object} callback
//  */
// UserSchema.methods.comparePassword = function comparePassword(password, callback) {
//   bcrypt.compare(password, this.password, callback);
// };

// /**
//  * The pre-save hook method.
//  */
// UserSchema.pre('save', function saveHook(next) {
//   const user = this;

//   // proceed further only if the password is modified or the user is new
//   if (!user.isModified('password')) return next();

//   return bcrypt.genSalt((saltError, salt) => {
//     if (saltError) { return next(saltError); }

//     return bcrypt.hash(user.password, salt, (hashError, hash) => {
//       if (hashError) { return next(hashError); }

//       // replace a password string with hash value
//       user.password = hash;

//       return next();
//     });
//   });
// });


// module.exports = mongoose.model('User', UserSchema);