var express = require("express");
// var bodyParser = require("body-parser");
var router = express.Router();


const Adventure = require("../models/Adventure");


router.post("/createOuting", function(req, res){
  console.log("localStorage.userId: " + localStorage.getItem('userId'));
  console.log(req.body)
  Adventure.create({
    userId: localStorage.getItem('userId'),
    location: req.body.location,
    activity: req.body.activity,
    date: req.body.date
  }, function(err){
      if (err){
        console.log(err);
      }
      else {
        res.status(201).json({
          success: true,
          message: 'Successfully posted Adventure to database!'
        });
      }
    })
})

router.get("/viewOuting", function(req, res){
  console.log("request body: " + req.body);
  console.log("localStorage.userId: " + localStorage.getItem('userId'));

  Adventure.find({
    userId: localStorage.getItem('userId')
  }), function(err){
      if (err){
        console.log(err);
      }
      else {
        res.send("Outings retrieved!");
        console.log("response status: " + res.status);

      }
    }
})


router.get("sendMail", function(req,res){

})


module.exports = router;



