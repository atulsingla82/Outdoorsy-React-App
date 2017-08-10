
// Include Server Dependencies
const express = require("express"); 
const passport = require("passport");
const config = require('./config');
const bodyParser = require("body-parser");
// const favicon = require('serve-favicon');
const logger = require("morgan");
//const mongoose = require("mongoose");

var uri = process.env.MONGODB_URI || config.dbUri;
// connect to the mongo database and load models
require('./models').connect(uri);

const controller = require("./controllers/controller");

// Create Instance of Express
const app = express();
let PORT = process.env.PORT || 3000;


// static files
app.use(express.static("./public"));
app.use(express.static(
  process.cwd() + '/public')
);


// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: false 
})); 
app.use(bodyParser.text()); //?
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ========== PASSPORT ==========
app.use(passport.initialize());
app.use(passport.session());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

//setting up routes
const mainRoute = require('./controllers/main-route.js');
const apiRoutes = require('./controllers/api-route.js');
const authRoutes = require('./controllers/auth.js');
// app.use('/', mainRoute); // To change
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);
app.use('/', controller);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  // const err = new Error('Not Found');
  // err.status = 404
  // next(err);
  res.send("not found")
});


// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404
//   next(err);
// });


// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//       res.status(err.status || 500);
//       res.render('error', {
//           message: err.message,
//           error: err
//       });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.send('error', {
//         message: err.message,
//         error: {}
//     });
// });

// Listener
app.listen(PORT, function() {
  console.log("App is listening on PORT: " + PORT);
});


module.exports = app;


