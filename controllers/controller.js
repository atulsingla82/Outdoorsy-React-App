var express = require("express");
// var bodyParser = require("body-parser");
var router = express.Router();


const Adventure = require("../models/Adventure");


router.post("/createOuting", function(req, res){
  Adventure.create({
    location: req.body.location,
    activity: req.body.activity,
    date: req.body.date
  }), function(err){
      if (err){
        console.log(err);
      }
      else {
        res.send("New outing created!");
        // res.status(200).json({
          
        // })
        // console.log("New outing created!")
      }
    }
})

router.get("/viewOuting", function(req, res){
  // TODO - ASAP, find way to create local store for the user id
  // and capture it during the login process.  Then modify this
  // to return documents where key UserId is equal to the UserId
  // in the local store.  Possibly use react-webstorage npm package.
  // The code that creates webstore does not have to be executed
  // within a component.
  Adventure.find({

  }), function(err){
      if (err){
        console.log(err);
      }
      else {
        res.send("Outings retrieved!");
        // res.status(200).json({
          
        // })
        // console.log("New outing created!")
      }
    }
})


router.get("sendMail",formData){

}

module.exports = router;



