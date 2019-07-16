module.exports = {
  friendlyName: 'Register insurrance',

  description: '',

  inputs: {
    studentCode: { type: 'string', required: true },
    fullname: { type: 'string', required: true },
    bhxhCode: { type: 'string' },
    birthDay: { type: 'string', required: true },
    gender: {
      type: 'string',
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
  },

  exits: {},

  fn: async function(inputs, exits) {
    sails.log.info(`====> issurrance/register-insurrance`);
    await Insurrance.findOne({
      where: {
        studentCode: inputs.studentCode,
        state: true,
      },
    })
      .then(ins => {
        if (!ins) {
          var initIns = {
            studentCode: inputs.studentCode,
            fullname: inputs.fullname,
            bhxhCode: inputs.bhxhCode,
            birthDay: inputs.birthDay,
            gender: inputs.gender,
            nationality: inputs.nationality,
            nation: inputs.nation,
            ndkgksCity: inputs.ndkgksCity,
            ndkgksDistrict: inputs.ndkgksDistrict,
            ndkgksWards: inputs.ndkgksWards,
            hospitalCode: inputs.hospitalCode,
            dcttCity: inputs.dcttCity,
            dcttDistrict: inputs.dcttDistrict,
            dcttWards: inputs.dcttWards,
            dcttAddress: inputs.dcttAddress,
            address: inputs.address,
            cmnd: inputs.cmnd,
          };
          Insurrance.create(initIns).exec((err, created) => {
            if (err) {
              sails.log.error(err.message);
              return exits.success({
                code: 2,
                message: `Hệ thống đang bận, vui lòng quay lại sau ít phút`,
                data: {},
              });
            }
            return exits.success({
              code: 0,
              message: ``,
              data: created,
            });
          });
        } else {
          return exits.success({
            code: 3,
            message: `Bạn đã đăng ký trước đó vào ngày ${ins.creatAt}`,
            data: ins,
          });
        }
      })
      .catch(err => {
        sails.log.debug(err);
        return exits.success({
          code: 1,
          message: `Hệ thống đang bận, vui lòng quay lại sau`,
          data: { err: err.message },
        });
      });
  },
};
