const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config');

// localStorage added by Claude 07/28/17
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };

  // find a user by email address
  return User.findOne({ email: userData.email }, (err, user) => {
    if (err) { return done(err); }

    if (!user) {
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }
    console.log("checkpoint A: " + userData.email); //added by Claude 07/28/17 
    localStorage.setItem('User_email', userData.email);
    console.log("User email: " + localStorage.getItem('User_email'));
    // check if a hashed user's password is equal to a value saved in the database
    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: user._id
      };
      console.log("checkpoint 1 " + user._id); //added by Claude for testing
      localStorage.setItem('userId', user._id);
      console.log("localStorage.userId: " + localStorage.getItem('userId'));
      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: user.name,
        id: user._id
      };
      console.log("checkpoint 2 " + user.name);  //added by Claude for testing
      return done(null, token, data);
    });
  });
});

// const jwt = require('jsonwebtoken');
// const User = require('mongoose').model('User');
// const PassportLocalStrategy = require('passport-local').Strategy;
// const config = require('../config');

// /**
//  * Return the Passport Local Strategy object.
//  */
// module.exports = new PassportLocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   session: false,
//   passReqToCallback: true
// }, (req, email, password, done) => {
//   const userData = {
//     email: email.trim(),
//     password: password.trim(),
//     name: req.body.name.trim()
//   };

//   // find a user by email address
//   return User.findOne({ email: userData.email }, (err, user) => {
//     if (err) { return done(err); }

//     if (!user) {
//       const error = new Error('Incorrect email or password');
//       error.name = 'IncorrectCredentialsError';

//       return done(error);
//     }

//     // check if a hashed user's password is equal to a value saved in the database
//     return user.comparePassword(userData.password, (passwordErr, isMatch) => {
//       if (err) { return done(err); }

//       if (!isMatch) {
//         const error = new Error('Incorrect email or password');
//         error.name = 'IncorrectCredentialsError';

//         return done(error);
//       }

//       const payload = {
//         sub: user._id
//       };

//       // create a token string
//       const token = jwt.sign(payload, config.jwtSecret);
//       const data = {
//         name: user.name
//       };

//       return done(null, token, data);
//     });
//   });
// });
