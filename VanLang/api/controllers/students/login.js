const jwToken = require('../../services/isAuthen');

module.exports = {
  friendlyName: 'Login',

  description: 'Lien ket dang nhap fb voi sinh vien co trung email',

  inputs: {
    email: {
      description: 'Email cua sinh vien',
      type: 'string',
      isEmail: true,
      required: true,
    },
    mobile: {
      description: 'Sdt cua sinh vien xac thuc qua fb',
      type: 'string',
    },
    fbId: {
      description: '',
      type: 'string',
    },
  },

  exits: {
    notFound: {
      description: 'mobile not found',
      responseType: 'notFound',
    },
    badRequest: {
      description: 'invalid data',
      responseType: 'badRequest',
    },
    serverError: {
      responseType: 'server error',
      description: 'exception',
    },
  },

  fn: async function(inputs, exits) {
    sails.log.info(`=====> students/login`);
    let student = await Students.findOne({
      email: inputs.email,
      state: true,
    });
    if (!student) {
      return exits.success({
        code: 2,
        message: `Không tìm thấy email để đồng bộ.`,
        data: {},
      });
    }
    if (!student.mobile || 0 === student.length || '' === student.mobile) {
      await Students.updateOne({
        email: student.email,
        state: true,
      })
        .set({
          mobile: inputs.mobile,
          fbId: inputs.fbId,
          password: 'NA',
        })
        .exec((err, updated) => {
          if (err) {
            sails.log.error(error);
            return exits.success({
              code: 3,
              message: `Không thể liên kết, vui lòng thực hiện lại sau.`,
              data: {
                err: error.message,
              },
            });
          }
          if (!updated) {
            return exits.success({
              code: 1,
              message: `Không thể liên kết, vui lòng thực hiện lại sau.`,
              data: {},
            });
          }
          return exits.success({
            code: 0,
            message: `success`,
            data: {
              user: updated,
              token: jwToken.sign(updated),
            },
          });
        });
    } else {
      return exits.success({
        code: 4,
        message: `Email này đã được liên kết với số điện thoại khác. Vui lòng kiểm tra lại`,
        data: {},
      });
    }
  },
};
