// Include Server Dependencies
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");
var router = express.Router();

const routes = require('./routes/index');
const users = require('./routes/users');

const app = express();

// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;



// Connect to mongoose
// const db = mongoose.connect('mongodb://127.0.0.1:27017/outdoorsy', {
//   useMongoClient: true
//   /* other options */
// });

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
// F for M herman
app.use(cookieParser()); // for passport secret
app.use(require('express-session')({
  secret: '****',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("./public")); 
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// config passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Connect to Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/Outdoorsy2");
const db = mongoose.connection;

//bring in the models
const User = require('./models/User');
const Adventure = require('./models/Adventure');


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

// //test
app.get("/test", function (req, res) {
  console.log("test success")
  res.send("success 2");
});

app.get("/", function (req, res) {
  console.log("local ");
  res.send("local - /");
})


module.exports = app;