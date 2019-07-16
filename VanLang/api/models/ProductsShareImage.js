/**
 * ProductsShareImage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string' },
    productId: {model: 'productsshare'},
    imageUrl: { type: 'string' },
    imageFd: { type: 'string' },
    state: { type: 'boolean', defaultsTo: false },
  },
};
