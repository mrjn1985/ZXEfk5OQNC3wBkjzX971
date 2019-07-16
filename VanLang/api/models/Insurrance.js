/**
 * Insurrance.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    studentCode: { type: 'string', required: true, unique: true },
    fullname: { type: 'string', required: true },
    bhxhCode: { type: 'string' },
    birthDay: { type: 'string', required: true },
    gender: {
      type: 'number',
      description: `when 1 then 'Nam' when 2 then 'Nữ' else 'Chọn'`,
    },
    nationality: { type: 'string', description: 'quốc tịch' },
    nation: { type: 'string', description: 'dân tộc' },
    ndkgksCity: {
      type: 'string',
      description: 'Thành phố nơi đăng ký giấy khai sinh 3 cấp',
    },
    ndkgksDistrict: {
      type: 'string',
      description: 'Quận nơi đăng ký giấy khai sinh 3 cấp',
    },
    ndkgksWards: {
      type: 'string',
      description: 'Xã/huyện nơi đăng ký giấy khai sinh 3 cấp',
    },
    hospitalCode: { type: 'string', description: 'mã bệnh viện' },
    ndkkcbbd: {
      type: 'string',
      description: 'nơi đăng ký khám chữa bệnh ban đầu',
    },
    dcttCity: { type: 'string', description: 'Thành phố địa chỉ thường trú' },
    dcttDistrict: {
      type: 'string',
      description: 'quận/huyện địa chỉ thường trú',
    },
    dcttWards: { type: 'string', description: 'xã/phường địa chỉ thường trú' },
    dcttAddress: {
      type: 'string',
      description: 'Số nhà, ngõ, địa chỉ thường trú',
    },
    cmnd: { type: 'string', description: 'CMND' },
    state: {
      type: 'boolean',
      description: `true: đã thanh toán, false: chưa thanh toán`,
      defaultsTo: false,
    },
  },

  beforeCreate: function(valuesToSet, cb) {
    var moment = require('moment');
    if (valuesToSet.isSuperAdmin) {
      valuesToSet.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    }
    return cb();
  },
};
