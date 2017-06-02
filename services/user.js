/** @module user service - represents business logic related to users */
'use strict';

/**
 * @function configureService
 * @param {Object} app - application instance
 * @return {Object} service
 * @public
 */
function configureService(app) {

    let service = {},
        User = app.db.models.users,
        customErrorHandler = app.util.customErrorHandler;

    /**
     * @function get users
     * 
     * @param {Object} req - request
     * @param {Object} res - response
     * @return {JSON}
     * @public
     */
    service.get = function (req, res) {
        let id = req.params.id;
        
        User.findById(id)
            .then(function() {
                res.json({
                    success: true,
                    data: user
                });
            })
            .catch(customErrorHandler);
    }

    /**
     * @function get a particular user
     * 
     * @param {Object} req - request
     * @param {Object} res - response
     * @return {JSON}
     * @public
     */
    service.getAll = (req, res, next) => {
        
        User.findAll()
            .then((users) => {
                res.json({
                    success: true,
                    users: users
                });
            })
            .catch(customErrorHandler);
    }

    /**
     * @function add a user
     * 
     * @param {Object} req - request
     * @param {Object} res - response
     * @return {JSON}
     * @public
     */
    service.add = (req, res,next) => {
        
        let firstname = req.body.firstname,
            lastname =  req.body.lastname;
        
        User.create({ 
                firstName: firstname, 
                lastName:  lastname
            })
            .then((user) => {
                res.json({
                    success: true,
                    user: user
                });
            })
            .catch(app.util.errorHandler.genericRequestExceptionCatcher);

    }

    /**
     * @function update a particular user
     * 
     * @param {Object} req - request
     * @param {Object} res - response
     * @return {JSON}
     * @public
     */
    service.update = (req, res) => {

        let id =        req.params.id,
            firstname = req.body.firstname,
            lastname =  req.body.lastname;

        User.update(
            { 
                firstName: firstname, 
                lastName:  lastname
            },
            {
                where: {
                    id: id
                }
            })
            .then((user) => {
                res.json({
                    success: true,
                    user: user
                });
            })
            .catch(customErrorHandler);
    }

    /**
     * @function remove a particular user
     * 
     * @param {Object} req - request
     * @param {Object} res - response
     * @return {JSON}
     * @public
     */
    service.remove = (req, res) => {
        
    }

    return service;
}

/** @public Module exports */
module.exports = configureService;