/**
 * Students.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    code: {
      type: 'string',
      required: true,
      maxLength: 10
    },
    firstName: { type: 'string', maxLength: 100 },
    name: { type: 'string', maxLength: 100 },
    birthday: { type: 'string' },
    gender: {
      type: 'number',
      description: 'when 1 then `Male`, when 2 then `Female` else `N/A`',
    },
    email: {
      type: 'string',
      unique: true,
      required: true,
      isEmail: true,
      maxLength: 200,
    },
    password: { type: 'string', allowNull: true },
    mobile: { type: 'string', maxLength: 20, allowNull: true },
    fbId: { type: 'string', allowNull: true },
    class: { type: 'string' },
    branche: { type: 'string' },
    faculty: { type: 'string' },
    course: { type: 'string' },
    notifications: { type: 'number', defaultsTo: 0, allowNull: true },
    state: { type: 'boolean', defaultsTo: false },
  }
};
