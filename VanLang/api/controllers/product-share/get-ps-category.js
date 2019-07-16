module.exports = {
  friendlyName: 'Get ps category',

  description: '',

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    await ProductsShareCategory.find({
      where: { state: true },
      sort: 'id DESC',
    }).exec((err, result) => {
      if (err) {
        return exits.success({
          code: 1,
          message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
          data: [],
        });
      }
      return exits.success({
        code: 0,
        message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
        data: result,
      });
    });
  },
};
