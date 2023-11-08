const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const multer = require('multer');


require('dotenv').config();
// connect to the database with AFTER the config vars are processed
require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tutorsRouter = require('./routes/tutors');
const lessonsRouter = require('./routes/lessons');

const app = express();

// view engine setup
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tutors', tutorsRouter);
app.use('/lessons', lessonsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
