/**
 * ScheduleProfile.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    studentCode: { type: 'string' },
    content: { type: 'string' },
    fromTime: { type: 'string' },
    toTime: { type: 'string' },
    toDate: { type: 'string' },
  },

  beforeCreate: function(valuesToSet, cb) {
    var moment = require('moment');
    if (valuesToSet.isSuperAdmin) {
      valuesToSet.toDate = moment().format('YYYY-MM-DD');
    }
    return cb();
  },
};
