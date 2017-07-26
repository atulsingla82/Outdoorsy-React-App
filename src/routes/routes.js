// ITS NOT CLEAR IF WE NEED THIS WITH REACT ROUTER V.4
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../../App'; //hope this works 
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import NotFoundPage from './components/NotFoundPage';
import Auth from './modules/Auth';

// ?
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Banner from './components/common/Banner';
import Featured from './components/Featured';


const routes = {
  // base component (wrapper for the whole application).
  component: App, //"Base" -- do we need another?
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage); //authorized user view
        } else { 
          callback(null, App); //HomePage
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;


//============================================
// import React from 'react'
// import { Route, IndexRoute } from 'react-router-dom'

// import Whoops404 from '.,/components/Whoops404';

// const routes = (
//   <Route path="/" component={Layout}>
//     <IndexRoute component={IndexPage}/>
//     <Route path="athlete/:id" component={AthletePage}/>
//     <Route path="*" component={NotFoundPage}/>
//   </Route>
// );

// export default routes;
//============================================

// var express = require('express');
// var passport = require('passport');
// var User = require('../models/User');
// var router = express.Router();

// router.get('/test', function (req, res) {
//     res.send("testing 123");
// });


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

// router.get('/ping', function(req, res){
//   res.status(200).send("pong!");
// });

// module.exports = router;