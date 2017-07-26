var express = require("express");
// var bodyParser = require("body-parser");
var router = express.Router();


const Adventure = require("../models/Adventure");


router.post("/createOuting", function(req, res){
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
})


module.exports = router;


