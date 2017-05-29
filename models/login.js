/** @module users Represents login model */
'use strict';

/**
 * @function initModel - initialize model login
 * @public
 * @param {object} sequelize - Sequelize orm instance
 * @param {object} DataTypes - Sequelize datatype object
 * @return {object} login - login model
 */
var initModel = function(sequelize, DataTypes) {

  // define schema
  var login = sequelize.define('login', {
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  return login;
};

/** @public Module exports */
module.exports = initModel;