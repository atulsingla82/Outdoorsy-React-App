var express = require("express");
// var bodyParser = require("body-parser");
//var router = express.Router();

var app = express();

// grabbing our models
var db = require("./models");

//test
app.get("/test", function (req, res) {
  console.log("success");
  res.send("success 2");
})


// post route to create users
app.post("/createUser", function(req, res) {
  console.log(req.body)

  db.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    emailaddress: req.body.emailaddress,
    password: req.body.password
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("New user created!");
    }
  });

});



