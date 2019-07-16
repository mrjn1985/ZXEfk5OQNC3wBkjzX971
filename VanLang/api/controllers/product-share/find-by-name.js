module.exports = {
  friendlyName: 'Find by name',

  description: '',

  inputs: {
    name: {
      description: 'name of product share ',
      type: 'string',
      required: true,
    },
    pageNo: { description: 'page no', type: 'number', required: true },
    perPage: { description: 'limit', type: 'number', required: true },
  },

  exits: {},

  fn: async function(inputs, exits) {
    let queryParamPs = {
      like: {
        name: inputs.name,
      },
      where: {
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
