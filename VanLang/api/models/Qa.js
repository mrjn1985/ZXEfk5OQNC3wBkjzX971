/**
 * Qa.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    content: { type: 'string' },
    qaCategoryId: { type: 'number' },
    qaTypeId: { type: 'number' },
  },
};
