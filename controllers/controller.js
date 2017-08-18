var express = require("express");
// var bodyParser = require("body-parser");
var router = express.Router();


const Adventure = require("../models/Adventure");


router.post("/createOuting", function(req, res){
  console.log("localStorage.userId: " + localStorage.getItem('userId'));
  console.log(req.body);
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
  }).exec(function(err, doc){
    if (err) {
      console.log(err);
    }
    else {
      console.log(doc);
      res.send(doc);
    }
  });
})

router.delete("/viewOuting", function(req, res){
  

  Adventure.remove({
   userId: localStorage.removeItem('userId')
  }, function(err, doc){
    if (err) {
      return res.send(err);
      res.json({message:'Deleted'})
    
    }
  });
})




router.get("sendMail", function(req,res){

})


module.exports = router;



