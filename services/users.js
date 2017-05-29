/** @module users represents business logic related to users */
'use strict';

/**
 * @function configureService
 * @public
 * @param {object} app - application instance
 * @return {object} service
 */
function configureService(app) {

    var service = {};
    var users = app.db.models.users;

    service.get = function () {
        users.findAll().then(users => users);
    }
    
    service.getAll = function () {
        users.findAll().then(users => users);
    }

    service.create = function () {
        
    }

    service.update = function () {
        
    }

    service.delete = function () {
        
    }

    return service;
}

/** @public Module exports */
module.exports = configureService;