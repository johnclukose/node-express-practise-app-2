/**  @module service - represents business logic
 * interface between routes and models.
 */
'use strict';

/**
 * @function configureApplicationServices
 * @public
 * @param {object} app - application instance
 */
var configureApplicationServices = function(app) {

  var fs = app.util.fs;
  var path = app.util.path;
  
  // service will act as a container for bussiness logic
  var service = {}
  
  // load all business logic into the service container
  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
      var serv = require(path.join(__dirname, file))(app);
      service[file.replace('.js', '')] = serv;
    });

  app.service = service;
}

/** @public Module exports */
module.exports = configureApplicationServices;