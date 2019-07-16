module.exports = {
  friendlyName: 'Lst product by category',

  description: '',

  inputs: {
    categoryId: {
      description: 'id of product share category ',
      type: 'number',
      required: true,
    },
    pageNo: { description: 'page no', type: 'number', required: true },
    perPage: { description: 'limit', type: 'number', required: true },
  },

  exits: {
    notFound: { description: 'not found', responseType: 'notFound' },
    invalid: { description: 'exception', responseType: 'invalid' },
  },

  fn: async function(inputs, exits) {
    let queryParamPs = {
      where: {
        categoryId: inputs.categoryId,
        state: true,
      },
      sort: 'id DESC',
    };

    var lst = ProductsShareCategory.find({ state: true })
      .then(_lstCategory => {
        return {
          lstPsCategory: _lstCategory,
          lstPs: ProductsShare.find(queryParamPs).paginate({
            page: inputs.pageNo,
            limit: inputs.perPage,
          }),
        };
      })
      .catch(err =>
        exits.success({
          code: 1,
          message: `Hệ thống đang bận, vui lòng quay lại sau ít phút.`,
          data: { err: err.message },
        })
      );
    if (!lst) {
      return exits.success({
        code: 2,
        message: `Danh sách trống`,
        data: [],
      });
    }
    return exits.success({
      code: 0,
      message: ``,
      data: lst,
    });
  },
};
