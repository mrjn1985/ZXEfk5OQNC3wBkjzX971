/**
 * HandbookStudent.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string' },
    content: { type: 'string' },
    handbookCategoryId: { type: 'number', required: true },
    state: { type: 'boolean', defaultsTo: false },
  },
};
