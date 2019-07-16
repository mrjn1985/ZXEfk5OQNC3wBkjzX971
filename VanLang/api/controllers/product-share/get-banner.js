module.exports = {
  friendlyName: 'Get banner',

  description: 'get banner of products share',

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    await ProductsShareBanner.find({ limit: 8, sort: 'createdAt DESC' }).exec(
      (err, results) => {
        if (err) {
          return exits.success({
            code: 1,
            message: 'Hệ thống đang bận vui lòng quay lại sau',
            data: { err: err.message },
          });
        }
        return exits.success({
          code: 0,
          message: '',
          data: results,
        });
      }
    );
  },
};
