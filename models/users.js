/**
 * @module users 
 * Represents users model 
 */
'use strict';

var Users = sequelize.define('users', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
