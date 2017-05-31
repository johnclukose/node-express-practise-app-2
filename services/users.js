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
    var Users = app.db.models.users;

    service.get = function () {
        Users.findAll().then(users => users);
    }
    
    service.getAll = function () {
        Users.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
        
        return Users.findAll().then(function(users){
            //logic
            return users;
        });
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