module.exports = {
  friendlyName: 'Get detail',

  description: '',

  inputs: {
    motelId: { type: 'number', description: 'id của phòng trọ' },
  },

  exits: {},

  fn: async function(inputs, exits) {
    console.log('================ get detail');
    await sails.sendNativeQuery(
      `call ${sails.config.custom.schemaDb}.motelRoom_getDetail($1)`,
      [inputs.motelId],
      (err, results) => {
        if (err) {
          return exits.success({
            code: 1,
            message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
            data: { err: err.message },
          });
        }
        if (!results) {
          return exits.success({
            code: 2,
            message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
            data: [],
          });
        }
        return exits.success({
          code: 0,
          message: '',
          data: results.rows[0],
        });
      }
    );
  },
};
