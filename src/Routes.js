// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router-dom'
import App from './App';
import Whoops404 from './components/Whoops404';

const routes = (
  <Route path="/" component={App}>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;

// =========================
// var express = require('express');
// var passport = require('passport');
// var User = require('../models/User');
// var router = express.Router();

// router.get('/test', function (req, res) {
//     res.send("testing 123");
// });
// ==========================

// router.get('/', function (req, res) {
//     res.render('index', { user : req.user });
// });

// router.get('/register', function(req, res) {
//     res.render('register', { });
// });

// router.post('/register', function(req, res) {
//     User.register(new User({ username : req.body.username }), req.body.password, function(err, User) {
//         if (err) {
//             return res.render('register', { User : User });
//         }

//         passport.authenticate('local')(req, res, function () {
//             res.redirect('/');
//         });
//     });
// });

// router.get('/login', function(req, res) {
//     res.render('login', { user : req.user });
// });

// router.post('/login', passport.authenticate('local'), function(req, res) {
//     res.redirect('/');
// });

// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

module.exports = router;