
/**
 * ProductsShare.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string' },
    content: { type: 'string' },
    categoryId: { model: 'productssharecategory' },
    studentId: { model : 'students' },
    care: { type: 'number', defaultsTo: 0 },
    state: { type: 'boolean', defaultsTo: false },
  },
};
