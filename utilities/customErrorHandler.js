/** @module custom error handler */
'use strict';

/**
 * @function addApplicationErrorHandlers - add error handlers to application instance
 *
 * @param {Object} app - application instance
 * @public
 */
function addApplicationErrorHandlers(app) {

    // conatainer for custom error handlers of the application
    app.util.errorHandler = {};

    /**
     * @function request404Handler
     * to be used as an application middleware for handling 404 requests
     * usage - after all application routes. Ex app.use(app.util.errorHandler.request404Handler);
     *
     * @param {Object}   req - request
     * @param {Object}   res - response
     * @param {Function} next
     * @public
     */
    app.util.errorHandler.request404Handler = (req, res, next) => res.status(404).send();

    /**
     * @function requestExceptionCatcher
     * to catch exception across the application and forward to exception handler
     * usage - Ex then( ... ).catch(app.util.errorHandler.requestExceptionCatcher);
     * not to be used with cron and other scripts
     *
     * @param {Object}   req - request
     * @param {Object}   res - response
     * @param {Function} next
     * @public
     */
    app.util.errorHandler.requestExceptionCatcher = err => next(err);

    /**
     * @function requestExceptionHandler
     * to be used an application middleware for handling exception during request processing
     * usage - Ex app.use(app.util.errorHandler.requestExceptionHandler);
     * not to be used with cron and other scripts
     *
     * @param {Object}   req - request
     * @param {Object}   req - request
     * @param {Object}   res - response
     * @param {Function} next
     * @public
     */
    app.util.errorHandler.requestExceptionHandler  = (req, res, next, err) => {

        // TODO : better looger here
        // TODO : not send error messages in production
        res.json({
            success: false,
            errors: err.errors,
            stacktrace : err.stack
        });
    }

    // TODO : handle application level exception / errors
    // //send the user to 500 page without shutting down the server
    // process.on('uncaughtException', (err,req,res,next) => {console.log('-------------------------- Caught exception: ' + err);next()},
    // app.util.customErrorHandler);
    // // process.on('uncaughtException', function (err) {
    // //   console.log('-------------------------- Caught exception: ' + err);
    // //     app.use(function(err, req, res, next){
    // //         res.render('500');
    // //     });
    // // });

}

/** @public Module exports. */
module.exports = addApplicationErrorHandlers;
