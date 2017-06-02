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
app.util.sequelize = require('sequelize');
app.util.favicon = require('serve-favicon');

// general application configuration
app.use(app.util.bodyParser.json());
app.use(app.util.bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride()) -> good to know
app.use(app.util.logger('dev'));
app.use(app.util.cookieParser());
app.use(app.util.express.static(app.util.path.join(__dirname, 'public')));
app.use('/', app.util.router);         // configure router with application
app.use(app.util.favicon(app.util.path.join(__dirname, 'public', 'favicon.ico')));
app.disable('x-powered-by');

// business specific application configuration
app.config = require('./config');               // get application configuration
require('./models')(app);                       // configure database
require('./services')(app);                     // configure service
require('./routes')(app);                       // configure routes
require('./utilities/customErrorHandler')(app); // get application error handlers

app.use(app.util.errorHandler.request404Handler);       // add 404 middleware
app.use(app.util.errorHandler.requestExceptionHandler); // add 500 middleware

/** @public Module exports */
module.exports = app;