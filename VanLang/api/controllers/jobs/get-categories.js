module.exports = {
  friendlyName: 'Get categories',

  description: 'Get all categories',

  inputs: {
    pType: {
      type: 'number',
      description:
        'when 1 then FullTime, 2 then PartTime, 3 then Thực tập, else NA',
    },
  },

  exits: {
    notFound: {
      description: 'not found',
      responseType: 'notFound',
    },
    invalid: {
      description: 'exception',
      responseType: 'invalid',
    },
  },

  fn: async function(inputs, exits) {
    sails.log.info(`====> jobs/get-categories`);
    await sails.sendNativeQuery(
      `call ${sails.config.custom.schemaDb}.jobs_getCategories($1)`,
      [inputs.pType],
      (err, results) => {
        if (err) {
          sails.log.error(err.message);
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
