/** @module routes - represents application routes */
'use strict';

/**
 * @function configureApplicationRoutes - configure routes for the entire application
 * @public
 * @param {object} app - application instance 
 */
function configureApplicationRoutes(app) {

    var fs = app.util.fs, path = app.util.path, router = app.util.router;

    // setting home page route
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express!' });
    });
    
    fs
      .readdirSync(__dirname)
      .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
      })
      .forEach(function(file) {
        require(path.join(__dirname, file))(app);
      });
}

/** @public Module exports. */
module.exports = configureApplicationRoutes;