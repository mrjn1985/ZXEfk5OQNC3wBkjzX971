module.exports = {
  friendlyName: 'Get list utilities',

  description: 'Get all utilities of motel room',

  inputs: {},

  exits: {
    serverError: { responseType: 'server error', description: 'exception' },
    notFound: { description: 'not found', responseType: 'notFound' },
  },

  fn: async function(inputs, exits) {
    console.log('=================== get list utilities');

    await MotelRoomUtilities.find({ sort: 'id ASC' })
      .then(result => {
        if (!result) {
          return exits.success({
            code: 1,
            message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
            data: {},
          });
        }
        return exits.success({
          code: 0,
          message: ``,
          data: result,
        });
      })
      .catch(err => {
        return exits.success({
          code: 2,
          message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
          data: { err: err.message },
        });
      });
  },
};
