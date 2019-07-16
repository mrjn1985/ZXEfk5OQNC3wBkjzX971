/**
 * News.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string', maxLength: 200, required: true },
    contents: { type: 'string', columnType: 'text'},
    genresId: { type: 'number', required: true },
    image: { type: 'string' },
    state: { type: 'boolean', defaultsTo: false },
  },
};
