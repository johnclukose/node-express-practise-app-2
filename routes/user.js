/** @module user routes */
'use strict';

/**
 * @function addRoute - add routes for users
 * @param {Object} app - application instance
 * @public
 */
function addRoute(app) {

  /** dependencies */
  let router = app.util.router,
    UserService = app.service.user;

  router.get('/users', UserService.getAll); // get all users
  router.get('/users/:id', UserService.get); // get user by id
  router.post('/users', UserService.add); // add user
  router.put('/users/:id', UserService.update); // update user by id
  router.delete('/users/:id', UserService.remove); // delete user by id

  return router;
}

/** @public Module exports */
module.exports = addRoute;
