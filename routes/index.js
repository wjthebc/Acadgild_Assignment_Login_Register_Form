var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;

//GET /index
router.get('/', function (req, res) {
    res.render('index', {
      user : req.user
    });
});

// GET /register
router.get('/register', function(req, res) {
    res.render('register', {
      user : req.user
     });
});

//POST /register
router.post('/register', function(req, res) {
    Account.register(new Account
      ({ username : req.body.username }),
      req.body.password,
      function(err, account) {
        if (err) {
//redirects to /error if there is an error with your registration
          return res.redirect('/error');
        }
          res.redirect('/login');
    });
});

//GET /login
router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

//POST /login
router.post('/login', passport.authenticate('local'), function(req, res) {
//creates mongo db session for user
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    res.redirect('/portfolio');
});

//GET /logout
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

//GET /db
router.get('/db', function(req, res) {
    res.render('./db');
});

//GET /error
router.get('/error', function(req, res) {
    res.render('./error', {
      user : req.user
    });
});

//GET /portfolio - notice the callback for authentication
router.get('/portfolio',checkAuthentication,function(req,res){
});

//check if user is authenticated function
function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        res.render('./portfolio', {
          user : req.user
        });;
    } else{
        res.redirect("/login");
    }
}

module.exports = router;
