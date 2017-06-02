/** @module user service - represents business logic related to users */
'use strict';

/**
 * @function configureService
 * @param {Object} app - application instance
 * @return {Object} service
 * @public
 */
function configureService(app) {

  let UserService = {},
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
  UserService.get = function (req, res, next) {
    let id = req.params.id;

    User.findById(id)
      .then(function () {
        res.json({
          success: true,
          data: user
        });
      })
      .catch(customErrorHandler);
  };

  /**
   * @function get a particular user
   *
   * @param {Object} req - request
   * @param {Object} res - response
   * @return {JSON}
   * @public
   */
  UserService.getAll = (req, res, next) => {
    User.findAll()
      .then((users) => {
        res.json({
          success: true,
          users: users
        });
      })
      .catch(customErrorHandler);
  };

  /**
   * @function add a user
   *
   * @param {Object} req - request
   * @param {Object} res - response
   * @return {JSON}
   * @public
   */
  UserService.add = (req, res, next) => {
    console.log(next);
    let firstName = req.body.firstName,
      lastName = req.body.lastName;

    User.create(req.body)
      .then((user) => {
        res.json({
          success: true,
          user: user
        });
      })
      .catch(app.util.errorHandler.requestExceptionHandler.bind(null, req, res, next));
  };

  /**
   * @function update a particular user
   *
   * @param {Object} req - request
   * @param {Object} res - response
   * @return {JSON}
   * @public
   */
  UserService.update = (req, res, next) => {
    let id = req.params.id,
      firstname = req.body.firstname,
      lastname = req.body.lastname;

    User.update(
      {
        firstName: firstname,
        lastName: lastname
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
  };

  /**
   * @function remove a particular user
   *
   * @param {Object} req - request
   * @param {Object} res - response
   * @return {JSON}
   * @public
   */
  UserService.remove = (req, res) => {
    // Todo: find user and delete
  };

  return UserService;
}

/** @public Module exports */
module.exports = configureService;
