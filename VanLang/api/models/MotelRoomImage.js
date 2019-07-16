/**
 * MotelRoomImage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string' },
    motelRoomId: { type: 'number', required: true },
    url: { type: 'string' },
    state: { type: 'boolean', defaultsTo: false },
  },
};
