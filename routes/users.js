/** user routes */
'use strict';

/**
 * @function addRoute add routes for users
 * @public
 * @param {object} app - application instance 
 */
function addRoute(app) {

  var UsersService = app.service.users;
  var router = app.util.router;
    
  // get all users
  router.get('/users', function(req, res, next) {
      UsersService.getAll().then(function(response){
        res.json(response);
      })
  });

  // get a particular user
  router.get('/users/:id', function(req, res, next) {
    res.send('respond with a resource');
  });

  // create a user
  router.post('/users', function(req, res, next) {
     users.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });

  // delete a user
  router.delete('/users/:id', function(req, res, next) {
    res.send('respond with a resource');
  });
}

/** @public Module exports */ 
module.exports = addRoute;