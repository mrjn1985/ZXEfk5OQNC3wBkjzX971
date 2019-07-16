module.exports = {
  friendlyName: 'Get job detail',

  description: '',

  inputs: {
    jobId: { description: 'id of jobs', type: 'number', required: true },
  },

  exits: {
    notFound: {
      description: 'not found',
      responseType: 'notFound',
    },
  },

  fn: async function(inputs, exits) {
    sails.log.info(`====> jobs/get-jobs-detail`);
    await sails.sendNativeQuery(
      `call ${sails.config.custom.schemaDb}.jobs_getDetail($1)`,
      [inputs.jobId],
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
