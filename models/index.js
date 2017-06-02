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
let configureApplicationDatabase = function(app) {

  // fetch database configuration
  let appConfig = app.config;
  let fs = app.util.fs;
  let path = app.util.path;
  let dbConfig = appConfig[appConfig.mode].database;
  let Sequelize = app.util.sequelize;

  // db acts as a container for all database related objects
  let db = { models: {}};

  /**
   * check if the database config has environment variables set
   * and update the config with the environment value and
   * initialize Sequelize with the updated config.
   */
  for (let key in dbConfig){
    if(dbConfig[key].ENV && dbConfig[key].ENV !== null){
        dbConfig[key] = process.env[dbConfig[key].ENV];
    }
  }

  // create orm instance
  let sequelize = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, dbConfig.options);

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
      let model = sequelize.import(path.join(__dirname, file));
      db.models[model.name] = model;
    });

  Object.keys(db.models).forEach(function(modelName) {
    if ("associate" in db.models[modelName]) {
      db.models[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  app.db = db;

};

/** @public Module exports */
module.exports = configureApplicationDatabase;
