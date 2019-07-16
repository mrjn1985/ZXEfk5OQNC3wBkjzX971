/**
 * ProductsShareBanner.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{
      type: 'string'
    },
    imageUrl:{
      type: 'string', columnType: 'text'
    },
    state:{
      type: 'boolean', defaultsTo: false
    }

  },

};

