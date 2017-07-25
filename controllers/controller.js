var express = require("express");
// var bodyParser = require("body-parser");
//var router = express.Router();

var app = express();

const User = require("../models/User");
const Adventure = require("../models/Adventure");


module.exports = function(app) {
// console.log("Routes loaded properly")
// //test
// app.get("/test", function (req, res) {
//   console.log("success");
//   res.send("success 2");
// })


  // post route to create users
  app.post("/createUser", function(req, res) {
      console.log("Post route hit!");
      console.log(req.body)
      // models is referencing database
      User.create({
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

  app.post("/createOuting", function(req, res){
    Adventure.create({
      location: req.body.location,
      activity: req.body.activity,
      date: req.body.date
    }, function(err){
      if (err){
        console.log(err);
      }
      else {
        res.send("New outing created!")
      }
    });
  });

}