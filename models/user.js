/** @module users Represents users model */
'use strict';

/**
 * @function initModel - initialize model users
 * @public
 * @param {object} sequelize - Sequelize orm instance
 * @param {object} DataTypes - Sequelize datatype object
 * @return {object} users - users model
 */
let initModel = function(sequelize, DataTypes) {

  // define schema
  let users = sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
        allowNull: true
    }
  });

  return users;
};

/** @public Module exports */
module.exports = initModel;