/** For handling entire application routes */
'use strict';

/**
 * @var {string[]} allRoutes - list of all the database services used in the application
 * @constant
 * @private
 * Service names passed in this array must be equal to the service file name
 */
var allRoutes = [
  'users',
  'login',
];

/**
 * @function setApplicationRoutes configure routes for the entire application
 * @public
 * @param {object} router 
 */
function setApplicationRoutes(router) {

  // home page
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express!' });
  });

  // add each route  
  allRoutes.forEach(function(routeName) {
    require(__dirname + '/' + routeName)(router);
  }); 
}

/** @public Module exports. */
module.exports = setApplicationRoutes;