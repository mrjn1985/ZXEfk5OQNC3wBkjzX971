module.exports = {
  friendlyName: 'Get news detail',

  description: '',

  inputs: {
    newsId: { description: 'id of news', type: 'number', required: true },
  },

  exits: {
    notFound: { description: 'not found', responseType: 'notFound' },
  },

  fn: async function(inputs, exits) {
    console.log(`=============get detail news ${inputs.newsId}`);
    await News.findOne({ id: inputs.newsId, state: true }).exec(
      (err, result) => {
        if (err) {
          return exits.success({
            code: 1,
            message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
            data: { err: err.message },
          });
        }
        return exits.success({
          code: 0,
          message: `success`,
          data: result,
        });
      }
    );
  },
};
