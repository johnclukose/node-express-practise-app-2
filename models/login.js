/**
 * @module login 
 * Represents login model 
 */
'use strict';

var login = sequelize.define('login', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});