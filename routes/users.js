/** user routes */
'use strict';

/**
 * @function addRoute add routes
 * @private
 * @param {object} router 
 */
function addRoute(router) {
    
  // get all users
  router.get('/users', function(req, res, next) {
    res.send('respond with a resource');
  });

  // get a particular user
  router.get('/users/:id', function(req, res, next) {
    res.send('respond with a resource');
  });

  // create a user
  router.post('/users', function(req, res, next) {
    res.send('respond with a resource');
  });

  // delete a user
  router.delete('/', function(req, res, next) {
    res.send('respond with a resource');
  });
}

/**
 * Module exports.
 * @public
 */
module.exports = addRoute;