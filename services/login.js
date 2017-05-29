/** @module login - represents business logic related to login */
'use strict';

/**
 * @function configureService
 * @public
 * @param {object} app - application instance
 * @return {object} service
 */
function configureService(app) {

    var service = {};
    var login = app.db.models.login;

    service.login = function () {
        
    }
    
    service.register = function () {
    
    }

    return service;
}

/** @public Module exports */
module.exports = configureService;