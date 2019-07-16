module.exports = {
  friendlyName: 'Get category by type',

  description: '',

  inputs: {
    qaTypeId: { type: 'number', description: 'type id của QA' },
  },

  exits: {},

  fn: async function(inputs) {
    console.log('================QA get category by type');
    await sails.sendNativeQuery(
      `call ${sails.config.custom.schemaDb}.qaGetCategoryByType($1)`,
      [inputs.qaTypeId],
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
