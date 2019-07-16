module.exports = {
  friendlyName: 'Get all',

  description: '',

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    sails.log.info(`====> banner/get-all`);
    await Banner.find({ where: { state: true }, sort: 'id DESC' }).exec(
      (err, result) => {
        if (err) {
          return exits.success({
            code: 1,
            message: 'Hệ thống bận, vui lòng quay lại sau',
            data: { err: err.message },
          });
        }
        return exits.success({
          code: 0,
          message: '',
          data: result,
        });
      }
    );
  },
};
