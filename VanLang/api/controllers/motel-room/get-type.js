module.exports = {


  friendlyName: 'Get type',


  description: 'lấy danh sách loại phòng',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    await MotelRoomType.find({ sort: 'id ASC' })
      .then(result => {
        if (!result) {
          return exits.success({
            code: 1,
            message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
            data: {},
          });
        }
        return exits.success({
          code: 0,
          message: ``,
          data: result,
        });
      })
      .catch(err => {
        return exits.success({
          code: 2,
          message: `Hệ thống hiện không có dữ liệu, vui lòng quay lại sau`,
          data: { err: err.message },
        });
      });
  }


};
