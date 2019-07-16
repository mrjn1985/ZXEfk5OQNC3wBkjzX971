module.exports = {
  friendlyName: 'List new jobs',

  description: '',

  inputs: {
    pageNo: { type: 'number', description: 'số trang' },
    perPage: { type: 'number', description: 'records per page' },
  },

  exits: {
    notFound: {
      description: 'not found',
      responseType: 'notFound',
    },
  },

  fn: async function(inputs, exits) {
    sails.log.info(`====> jobs/list-new-jobs`);
    await sails.sendNativeQuery(
      `call ${sails.config.custom.schemaDb}.jobs_getAll($1,$2,$3,$4)`,
      [inputs.pageNo, inputs.perPage, 0, 0],
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

    /*let queryParam = {
      where: { state: true },
      limit: inputs.perPage,
      sort: 'id DESC',
    };

    await Jobs.find(queryParam).exec((err, lstNewJobs) => {
      if (err) {
        return exists.success({
          code: 1,
          message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
          data: { message: err.message },
        });
      }
      if (lstNewJobs) {
        return exists.success({
          code: 0,
          message: ``,
          data: lstNewJobs,
        });
      } else {
        return exists.success({
          code: 2,
          message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
          data: [],
        });
      }
    });*/
  },
};
