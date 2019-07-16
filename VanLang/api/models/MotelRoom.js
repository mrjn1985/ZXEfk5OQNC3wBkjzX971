/**
 * MotelRoom.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string' },
    mobile: { type: 'string' },
    description: { type: 'string', description: 'mo ta chung ve phong' },
    area: { type: 'string', description: 'dien tich phong' },
    price: { type: 'number', description: 'gia thue phong' },
    downpay: { type: 'string', description: 'tien dat coc' },
    electricBill: { type: 'string' },
    watterBill: { type: 'string' },
    typeRoomId: { type: 'number' },
    utilities: { type: 'string' },
    tenant: {
      type: 'number',
      description:
        'gioi tinh nguoi o ghep, when 1 then `Nam`, when 2 then `Nu`, when 0 then `Tat ca`',
    },
    cityId: {type: 'number'},
    districtId: {type: 'number'},
    wardsId: { type: 'number', description: 'id cua xa/phuong' },
    street: { type: 'string' },
    numberHouse: { type: 'string' },
    state: {
      type: 'boolean',
      defaultsTo: false,
    },
  },
};
