module.exports = {
  friendlyName: 'Care product share',

  description: '',

  inputs: {
    idProduct: { type: 'number', required: true, description: 'id of product' },
  },

  exits: {
    serverError: { responseType: 'server error', description: 'exception' },
    notFound: { description: 'not found', responseType: 'notFound' },
  },

  fn: async function(inputs, exits) {
    await ProductsShare.updateOne({ id: inputs.idProduct })
      .set({
        care: objPs.care + 1,
      })
      .exec((err, psUpdated) => {
        if (err) {
          return exits.success({
            code: 1,
            message: `Lỗi quan tâm sản phẩm, vui lòng quay lại sau ít phút.`,
            data: { err: err.message },
          });
        }
        if (!objPs) {
          return exits.success({
            code: 2,
            message: `Lỗi quan tâm sản phẩm, vui lòng quay lại sau ít phút.`,
            data: {
              err: `Database not contains product share ${inputs.idProduct}`,
            },
          });
        }
        return exits.success({
          code: 0,
          message: `success`,
          data: psUpdated,
        });
      });

    // All done.
    return;
  },
};
