/** login routes */
'use strict';

/**
 * @function addRoute add routes
 * @private
 * @param {object} router 
 */
function addRoute(router) {
    
    // fetch login details
    router.post('/login', function(req, res, next) {
        res.send('respond with a resource');
    });
}

/**
 * Module exports.
 * @public
 */
module.exports = addRoute;
