/** @module login - represents business logic related to login */
'use strict';

/**
 * @function configureService
 * 
 * @param {Object} app - application instance
 * @return {Object} service
 * @public
 */
function configureService(app) {

    var service = {};
    var login = app.db.models.login;

    /**
     * @function login - login application
     * 
     * @param {Object} req - request
     * @param {Object} res - response
     * @public
     */
    service.login = function (req, res) {
        
    }
    
    /**
     * @function register - register user
     * 
     * @param {Object} req - request
     * @param {Object} res - response
     * @public
     */
    service.register = function (req, res) {
    
    }

    return service;
}

/** @public Module exports */
module.exports = configureService;