// dependencies. figure out what each does and delete
var express = require('express');
var path = require('path');
//morgan logs user input
var logger = require('morgan');
//allows us to use cokies
var cookieParser = require('cookie-parser');
//body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body
var bodyParser = require('body-parser');
//object data modeling (ODM) library that provides a modeling environment for mongodb
var mongoose = require('mongoose');
//handles logins and registration
var passport = require('passport');
//Passport strategy for authenticating with a username and password
var LocalStrategy = require('passport-local').Strategy;
//allows us to store sessions for user
const session = require('express-session');
//mondodb session store - allows us to store sessions for user in mongodb
const MongoStore = require('connect-mongo')(session);
//requires app model and stores in Account
var Account = require('./models/account');

//routes
var routes = require('./routes/index');
var users = require('./routes/users');
//stores express in app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//creates a session with express-session and cookies!
app.use(logger('combined'));
app.use(session({
  secret: 'sessionTesting',
//tells the app where to store the session - mongo db
  store: new MongoStore({mongooseConnection: mongoose.connection}),
//time to live for session. (backwards) this is 60 seconds times 60 minutes times 24 hours times 14 days - two weeks
  ttl: 14 * 24 * 60 * 60,
//removes expired sessions from mongo
  autoRemove: 'native',
//don't save session if unmodified
  saveUninitialized: false,
// don't create session until something stored
  resave: false
}));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// passport config
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//mongoose setup
var mongoDB = 'mongodb://localhost:27017/site-auth14';
mongoose.connect(mongoDB, { useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
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
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//makes app listen on port 5000
app.listen(5000, () => console.log('Server started listening on port 5000!'))

module.exports = app;




































// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;
