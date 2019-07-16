module.exports = {
  friendlyName: 'Top news',

  description: 'get top 10 news by createAt',

  inputs: {
    limit: { type: 'number', description: '' },
  },

  exits: {
    notFound: { description: 'No data', responseType: 'notFound' },
  },

  fn: async function(inputs, exits) {
    let queryParam = {
      where: { state: true },
      limit: inputs.limit ? inputs.limit : 10,
      sort: 'id DESC',
    };

    var lstNews = await News.find(queryParam);
    if (!lstNews) {
      return exits.success({
        code: 1,
        message: `Không có dữ liệu`,
        data: {},
      });
    }

    return exits.success({
      code: 0,
      message: `success`,
      data: lstNews,
    });
  },
};
