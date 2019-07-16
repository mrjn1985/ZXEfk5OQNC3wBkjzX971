// var winston = require('winston');
// var appRoot = require('app-root-path');
/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * https://sailsjs.com/docs/concepts/logging
 */

// var options = {
//   file: {
//     level: 'info',
//     name: 'file.info',
//     filename: `${appRoot}/logs/app.log`,
//     handleExceptions: true,
//     json: false,
//     maxsize: 5242880, // 5MB
//     maxFiles: 100,
//     colorize: true,
//   },
//   errorFile: {
//     level: 'error',
//     name: 'file.error',
//     filename: `${appRoot}/logs/error.log`,
//     handleExceptions: true,
//     json: false,
//     maxsize: 5242880, // 5MB
//     maxFiles: 100,
//     colorize: true,
//   },
//   console: {
//     level: 'debug',
//     handleExceptions: true,
//     json: false,
//     colorize: true,
//   },
// };

// var logger = winston.createLogger({
//   transports: [
//     new (winston.transports.Console)(options.console),
//     new (winston.transports.File)(options.errorFile),
//     new (winston.transports.File)(options.file)
//   ],
//   exitOnError: false, // do not exit on handled exceptions
// });

module.exports.log = {

  /***************************************************************************
  *                                                                          *
  * Valid `level` configs: i.e. the minimum log level to capture with        *
  * sails.log.*()                                                            *
  *                                                                          *
  * The order of precedence for log levels from lowest to highest is:        *
  * silly, verbose, info, debug, warn, error                                 *
  *                                                                          *
  * You may also set the level to "silent" to suppress all logs.             *
  *                                                                          *
  ***************************************************************************/
  // level: 'info',
  // colorize: false,
  // json: false,
  // custom: logger
};
