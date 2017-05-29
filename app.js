/**  
 * @module represents entire application 
 * module functionalities
 * - create express application
 * - configure dependencies
 * - configure models
 * - configure routes
 * - configure error handler
 */
'use strict';

/** Module dependencies */
var express = require('express');

// create instance of express application
var app = express();

/* adding dependencies to application instance(app) utility property(util). 
The idea is to inject the dependency directly into the app instance and 
thus avoiding repeated require statements across the application */
app.util = {};
app.util.express = express;
app.util.router = app.util.express.Router();
app.util.debug = require('debug')('myexpressapp:server');
app.util.http = require('http');
app.util.fs = require("fs");
app.util.path = require('path');
app.util.favicon = require('serve-favicon');
app.util.cookieParser = require('cookie-parser');
app.util.bodyParser = require('body-parser');
app.util.logger = require('morgan');
app.util.expressLayouts = require('express-ejs-layouts');
app.util.sequelize = require('sequelize');

// configuring application
app.config = require('./config');      // get application configuration
require('./models')(app);              // configure database
require('./services')(app);            // configure service
require('./routes')(app);              // configure routes
app.use('/', app.util.router);         // register routes with application
app.set('views', app.util.path.join(__dirname, 'views')); // configure views folder
app.set('view engine', 'ejs');         // configure view engine
app.use(app.util.expressLayouts);      // use ejs layouts
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(app.util.logger('dev'));
app.use(app.util.bodyParser.json());
app.use(app.util.bodyParser.urlencoded({ extended: false }));
app.use(app.util.cookieParser());
app.use(app.util.express.static(app.util.path.join(__dirname, 'public')));

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

/** @public Module exports */
module.exports = app;