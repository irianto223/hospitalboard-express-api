var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const mongoose = require('mongoose')
const cors = require('cors')
const seeder = require('./helpers/seeder')

mongoose.connect(`mongodb://localhost/rsud-dev`, (err) => {
  if (!err) {
    console.log('Database Connected...............')
  } else {
    console.log('Database error:', err)
  }
})

// seeding here
seeder.createDummyPoli()

var index = require('./routes/index');
var users = require('./routes/users');
const pasien = require('./routes/pasien')
const poli = require('./routes/poli')
const dokter = require('./routes/dokter')
const perawatan = require('./routes/perawatan')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', index);
app.use('/users', users);
app.use('/pasien', pasien)
app.use('/poli', poli)
app.use('/dokter', dokter)
app.use('/perawatan', perawatan)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
