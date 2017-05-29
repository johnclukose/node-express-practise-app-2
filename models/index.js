/** 
 * @module models - represents database schema
 * A module for  creating establish database connection and provide orm instance 
 * @reference http://sequelize.readthedocs.io/en/1.7.0/articles/express/
 */
'use strict';

/**
 * @function configureApplicationDatabase - create database connection
 * @public
 * @param {object} app - application instance
 */
var configureApplicationDatabase = function(app) {

  // fetch database configuration
  var appConfig = app.config;
  var fs = app.util.fs;
  var path = app.util.path;
  var dbConfig = appConfig[appConfig.mode].database;
  var Sequelize = app.util.sequelize;
  
  // db acts as a container for all database related objects
  var db = { models: {}};

  // create orm instance
  var sequelize = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, dbConfig.options);

  // test database connection status
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
      process.exit();
    });
  
  // load all model into the db container
  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
      var model = sequelize.import(path.join(__dirname, file));
      db.models[model.name] = model;
    });

  Object.keys(db.models).forEach(function(modelName) {
    if ("associate" in db.models[modelName]) {
      db.models[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  app.db = db;
}

/** @public Module exports */
module.exports = configureApplicationDatabase;