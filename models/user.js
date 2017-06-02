/** @module users Represents users model */
'use strict';

/**
 * @function initModel - initialize model users
 * @public
 * @param {object} sequelize - Sequelize orm instance
 * @param {object} DataTypes - Sequelize datatype object
 * @return {object} users - users model
 */
var initModel = function(sequelize, DataTypes) {

  // define schema
  var users = sequelize.define('users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmpty: false
      }
    },
    lastName: {
      type: DataTypes.STRING
    }
  });

  return users;
};

/** @public Module exports */
module.exports = initModel;