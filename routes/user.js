/** @module user routes */
'use strict';

/**
 * @function addRoute - add routes for users
 * @param {Object} app - application instance 
 * @public
 */
function addRoute(app) {

  /** dependancies */
  var router = app.util.router;
  var UserService = app.service.user;

  router.get('/user',        UserService.getAll);    // get all users
  router.get('/user/:id',    UserService.get);       // get user
  router.post('/user',       UserService.add);       // add user
  router.put('/user/:id',    UserService.update);    // update user
  router.delete('/user/:id', UserService.remove);    // delete user
}

/** @public Module exports */ 
module.exports = addRoute;