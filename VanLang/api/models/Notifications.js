/**
 * Notification.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    isPush: { type: 'number' },
    user: { type: 'number' },
    title: { type: 'string' },
    body: { type: 'string' },
    app: { type: 'string' },
    data: { type: 'string' },
    isDisplay: { type: 'number' },
    isRead: { type: 'number' },
  },
};
