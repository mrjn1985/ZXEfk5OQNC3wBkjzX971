module.exports = {
  friendlyName: 'List jobs',

  description: 'danh sach jobs',

  inputs: {
    pageNo: {
      description: 'number of page for pagination',
      type: 'number',
      required: true,
    },
    perPage: {
      description: 'number when return limit when select',
      type: 'number',
      required: true,
    },
    categoryId: { type: 'number', description: 'category of jobs' },
    pType: { type: 'number', description: 'type của jobs' },
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
    sails.log.info(`====> jobs/list-job`);
    await sails.sendNativeQuery(
      `call ${sails.config.custom.schemaDb}.jobs_getAll($1,$2,$3,$4)`,
      [inputs.pageNo, inputs.perPage, inputs.categoryId, inputs.pType],
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

    /*let queryParam = { where: { state: true }, sort: 'id DESC' };
    await Jobs.find(queryParam)
      .paginate({
        page: inputs.pageNo,
        limit: inputs.perPage,
      })
      .exec((err, jobs) => {
        if (err) {
          return exits.success({
            code: 1,
            message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
            data: { err: err.message },
          });
        }
        if (!jobs) {
          return exits.success({
            code: 2,
            message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
            data: [],
          });
        }
        return exits.success({
          code: 0,
          message: '',
          data: jobs,
        });
      });*/
  },
};
