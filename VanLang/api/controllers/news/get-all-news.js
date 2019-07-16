module.exports = {
  friendlyName: 'Get all news',

  description: '',

  inputs: {
    pageNo: { type: 'number', description: '' },
    perPage: { type: 'number', description: '' },
  },

  exits: {
    notFound: { description: 'No data', responseType: 'notFound' },
  },

  fn: async function(inputs, exits) {
    console.log(`inputs ${inputs.pageNo} : ${inputs.perPage}`);
    var param = {
      where: { state: true },
      sort: 'id DESC',
    };

    await News.find(param)
      .paginate({
        page: inputs.pageNo,
        limit: inputs.perPage,
      })
      .exec((err, result) => {
        if (err) {
          return exits.success({
            code: 1,
            message: `Không có dữ liệu`,
            data: {},
          });
        }
        return exits.success({
          code: 0,
          message: `success`,
          data: result,
        });
      });
  },
};
