/** @module connection A module for  creating establish database connection and provide orm instance */
'use strict';

/** @private Module dependencies */
var fs = require("fs");
var path = require("path");
var sequelizeModule = require('sequelize');

/**
 * @function createConnection create database connection
 * @param {JSON} appConfig - application configuration
 * @returns {Object} sequelize - ORM object
 */
var createConnection = function(appConfig) {
  
  var appMode = appConfig.mode; 
  var dbConfig = appConfig[appMode].database;
  var db = {};

  // create orm instance
  var sequelize = new sequelizeModule(
    dbConfig.name, 
    dbConfig.username, 
    dbConfig.password, 
    dbConfig.options
  );

  // Test connection status
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
      process.exit();
    });
  
  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
      var model = sequelize.import(path.join(__dirname, file));
      db.[model.name] = model;
    });

  Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;

  return db;
}

/** @public Module exports */
module.exports = createConnection;
