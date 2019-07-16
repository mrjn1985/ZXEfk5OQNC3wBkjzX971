var request = require('request');
const jwToken = require('../../services/isAuthen');

var fbConfig = {
  appId: sails.config.custom.accountKitId,
  accountKitApiVersion: 'v1.0',
  appSecret: sails.config.custom.accountKitSecret,
};
const meEndpointBaseUrl =`https://graph.accountkit.com/${fbConfig.accountKitApiVersion}/me`;

module.exports = {
  friendlyName: 'Login social',

  description: 'using account kit facebook',

  inputs: {
    token: { type: 'string', description: 'string token generate ' },
  },

  exits: {
    notFound: { description: 'not found', responseType: 'notFound' },
    badRequest: { description: 'invalid data', responseType: 'badRequest' },
    serverError: { responseType: 'server error', description: 'exception' },
  },

  fn: async function(inputs, exits) {
    sails.log.info(`=====> students/login-social`);
    var authorizationCode = inputs.token;
    var meEndpointUrl =`${meEndpointBaseUrl}?access_token=${authorizationCode}`;
    await request.get(
      { url: meEndpointUrl, json: true },
      (err, resp, respBody) => {
        if (err) {
          sails.log.error(err);
          return exits.error({
            code: 2,
            message: `Hệ thống đang bận, vui lòng quay lại sau ít phút.`,
            data: err.message,
          });
        }
        if (!respBody.phone) {
          return exits.error({
            code: 1,
            message: 'Lỗi đăng nhập hệ thống, vui lòng quay lại sau ít phút.',
            data: {},
          });
        }
        Students.findOne({
          where: {
            mobile: respBody.phone.number,
            fbId: respBody.id,
            state: true,
          },
        }).exec((err, existed) => {
          if (err) {
            sails.log.error(err);
            return exits.success({
              code: 0,
              message: 'Thành công',
              data: {
                user: {
                  fbId: respBody.id,
                  mobile: respBody.phone.number,
                },
                token: ``,
              },
            });
          }
          if (!existed) {
            return exits.success({
              code: 0,
              message: 'Thành công',
              data: {
                user: {
                  fbId: respBody.id,
                  mobile: respBody.phone.number,
                },
                token: ``,
              },
            });
          }
          return exits.success({
            code: 0,
            message: `Đăng nhập liên kết thành công`,
            data: {
              user: existed,
              token: jwToken.sign(existed),
            },
          });
        });
      }
    );
  },
};
