/**
 * Jobs.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    cateId: { type: 'number' },
    name: { type: 'string', maxLength: 200 },
    imageUrl: { type: 'string' },
    type: {
      type: 'number',
      description:
        'when 1 then `Fulltime`, when 2 then `Parttime`, when 3 then `Practice` else `N/A`',
    },
    salary: { type: 'string', maxLength: 120 },
    description: { type: 'string' },
    content: { type: 'string' },
    benefits: { type: 'string' },
    location: { type: 'string' },
    lat: { type: 'number' },
    long: { type: 'number' },
    dateExpired: { type: 'number', description: 'date expired of jobs' },
    companyName: { type: 'string' },
    companyLead: { type: 'string' },
    companyAvatar: { type: 'string' },
    state: { type: 'boolean', defaultsTo: false },
  },
};
