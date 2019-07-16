/**
 * Deals.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    categoryId: { type: 'number', required: true },
    name: { type: 'string' },
    content: { type: 'string' },
    state: { type: 'boolean', defaultsTo: false },
  },
};
