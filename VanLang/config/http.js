/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */
//const { decode } = require('msgpack-lite');
//const cuid = require('cuid');
// var bugsnag = require('@bugsnag/js');
// var bugsnagClient = bugsnag('39d840e0656e354b44347932ecab8ae7');
module.exports.http = {
  /****************************************************************************
   *                                                                           *
   * Sails/Express middleware to run for every HTTP request.                   *
   * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
   *                                                                           *
   * https://sailsjs.com/documentation/concepts/middleware                     *
   *                                                                           *
   ****************************************************************************/
  ssl: {
    cert: false,
    key: false,
  },
  middleware: {
    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP requests.           *
     * (This Sails app's routes are handled by the "router" middleware below.)  *
     *                                                                          *
     ***************************************************************************/

    // order: [
    //   'cookieParser',
    //   'session',
    //   'bodyParser',
    //   'compress',
    //   'poweredBy',
    //   'router',
    //   'www',
    //   'favicon',
    // ],

    order: [
      'bodyParser',
      'compress',
      'bodyParser',
      '$custom',
      'router',
    ],

    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests.       *
     *                                                                          *
     * https://sailsjs.com/config/http#?customizing-the-body-parser             *
     *                                                                          *
     ***************************************************************************/

    bodyParser: (function _configureBodyParser() {
      var skipper = require('skipper');
      var middlewareFn = skipper({
        strict: true,
        limit: '50mb',
      });
      return middlewareFn;
    })(),

    /**
     * Middleware for setting Connection: keep-alive to all responses
     */
    /*keepAlive: (req, res, next) => {
      res.set('Connection', 'keep-alive');
      next();
    },*/
    /**
     * Each request gets it's own unique id
     */
    /*requestId(req, res, next) {
      req.id = cuid();
      next();
    },*/
    /**
     * Middleware to decode msgpack format
     */
    /*decodeMsgPack(req, res, next) {
      const type = req.get('Content-Type');
      if (
        type === 'application/vnd.msgpack' &&
        req.body &&
        Buffer.isBuffer(req.body)
      ) {
        req.body = decode(req.body);
      }
      next();
    },*/

    /**
     * Extend time out
     */
    /*extendTimeout: (function() {
      console.log('Initializing `extendTimeout`...');

      return function(req, res, next) {
        sails.log.info('extendTimeout to 1h');
        req.setTimeout(3600000);

        return next();
      };
    })(),*/
  },
};
