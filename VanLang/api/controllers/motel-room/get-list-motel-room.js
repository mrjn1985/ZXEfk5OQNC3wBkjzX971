module.exports = {
  friendlyName: 'Get list motel room',

  description: '',

  inputs: {
    motelRoomType: { type: 'string', description: 'loai phong' },
    motelUtilities: { type: 'string', description: 'tien ich cua phong' },
    fromPrice: { type: 'number', description: 'gia khoang tiem can tren' },
    toPrice: { type: 'number', description: 'gia khoang tiem can duoi' },
    cityId:{type: 'number'},
    districtId: {type: 'number'},
    wardsId: { type: 'number', description: 'id xa/phuong' },
    pageNo: { description: 'page no', type: 'number', required: true },
    perPage: { description: 'limit', type: 'number', required: true },
  },

  exits: {
    serverError: { responseType: 'server error', description: 'exception' },
    notFound: { description: 'not found', responseType: 'notFound' },
  },

  fn: async function(inputs, exits) {
    console.log('================get list motel room');
    await sails.sendNativeQuery(
      `call ${
        sails.config.custom.schemaDb
      }.motelRoom_search($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [
        inputs.motelRoomType,
        inputs.motelUtilities,
        inputs.fromPrice,
        inputs.toPrice,
        inputs.cityId,
        inputs.districtId,
        inputs.wardsId,
        inputs.pageNo,
        inputs.perPage,
      ],
      (err, results) => {
        if (err) {
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
  },
};
