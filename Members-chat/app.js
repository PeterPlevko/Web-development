require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const session = require("express-session");
const passport = require('passport')
const MongoStore = require('connect-mongo')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

 


var app = express();

//mongo connect
var mongoDB = process.env.MONGO_URI
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
let db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))

//passport functions
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({mongoUrl: mongoDB}),
  cookie: {
      maxAge: 1000 * 60 * 60 * 24
  }
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
require('./config/passport')
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});




app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
