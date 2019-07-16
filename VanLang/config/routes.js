/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': { view: 'pages/homepage' },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/

  //**************** */ACTION

  //Student
  'POST /api/v1/students/login': { action: 'students/login', },
  'POST /api/v1/students/get-details': { action: 'students/get-details', },
  'POST /api/v1/students/login-social': { action: 'students/login-social', },

  //Jobs
  'POST /api/v1/jobs/list-new-jobs': { action: 'jobs/list-new-jobs',},
  'POST /api/v1/jobs/get-job-detail': { action: 'jobs/get-job-detail', },
  'POST /api/v1/jobs/list-job': { action: 'jobs/list-job', },
  'POST /api/v1/jobs/get-percent': { action: 'jobs/get-percent' },
  'POST /api/v1/jobs/get-categories': { action: 'jobs/get-categories' },

  //News
  'POST /api/v1/news/top-news': { action: 'news/top-news', },
  'POST /api/v1/news/get-news-detail': { action: 'news/get-news-detail', },
  'POST /api/v1/news/get-all-news': { action: 'news/get-all-news', },

  //Products Share
  'POST /api/v1/product-share/create-product-share': {action: 'product-share/create-product-share',},
  'POST /api/v1/product-share/lst-product-by-category': {action: 'product-share/lst-product-by-category', },
  'POST /api/v1/product-share/care-product-share': { action: 'product-share/care-product-share', },
  'POST /api/v1/product-share/get-ps-category': { action: 'product-share/get-ps-category' },
  'POST /api/v1/product-share/find-by-name': { action: 'product-share/find-by-name', },
  'POST /api/v1/product-share/get-banner': { action: 'product-share/get-banner' },

  //Motel room
  'POST /api/v1/motel-room/get-list-motel-room': { action: 'motel-room/get-list-motel-room', },
  'POST /api/v1/motel-room/get-list-utilities': { action: 'motel-room/get-list-utilities' },
  'POST /api/v1/motel-room/get-detail': { action: 'motel-room/get-detail' },
  'POST /api/v1/motel-room/get-type': { action: 'motel-room/get-type' },


  //Insurrance
  'POST /api/v1/insurrance/register-insurrance': { action: 'insurrance/register-insurrance', },

  //Schedule Profile
  'POST /api/v1/schedule-profile/schedule': { action: 'schedule-profile/schedule', },

  //Banner
  'POST /api/v1/banner/get-all': { action: 'banner/get-all' },

  //Q and A
  'POST /api/v1/qa/get-category-by-type': { action: 'qa/get-category-by-type' },
  'POST /api/v1/qa/add-qa': { action: 'qa/add-qa' },

  //Device
  'POST /api/v1/device/create-device': { action: 'device/create-device' },


  'POST /api/v1/test/test': { action: 'test/test' },
};
