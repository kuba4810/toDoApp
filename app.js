var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cors = require('cors');


const staticRoute = require('./routes/static');
const userRoute = require('./routes/users');
const todoRoute = require('./routes/todos');

// Connection with MongoDB
// -----------------------------------------------------------
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
}, (err) => {
  if (!err) {
      console.log('Connection with database established...');
  } else {
      console.log(err);
  }
});

// Settings
// -----------------------------------------------------------
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/build'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());
app.use(cookieParser());



app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.use(userRoute);
app.use(todoRoute);
app.use(staticRoute);



module.exports = app;
