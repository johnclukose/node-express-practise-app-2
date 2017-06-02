/** login routes */
'use strict';

/**
 * @function addRoute add routes for login
 * @public
 * @param {object} app - application instance
 */
function addRoute(app) {
  let router = app.util.router;

  // fetch login details
  router.post('/login', function (req, res, next) {
    res.send('respond with a resource');
  });

  return router;
}

/** @public Module exports */
module.exports = addRoute;
