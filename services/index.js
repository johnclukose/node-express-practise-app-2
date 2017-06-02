/**  @module service - represents business logic
 * interface between routes and models.
 */
'use strict';

/**
 * @function configureApplicationServices
 * @param {Object} app - application instance
 * @public
 */
let configureApplicationServices = function(app) {

  let fs = app.util.fs,
    path = app.util.path;

  // service will act as a container for bussiness logic
  let service = {};

  // load all business logic into the service container
  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
      service[file.replace('.js', '')] = require(path.join(__dirname, file))(app);
    });

  app.service = service;
};

/** @public module exports */
module.exports = configureApplicationServices;
