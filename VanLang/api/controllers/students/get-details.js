module.exports = {
  friendlyName: 'Get details',

  description: 'Get details of student',

  inputs: {
    studentId: { description: 'id of student', type: 'number', required: true },
  },

  exits: {
    notFound: { description: 'not found', responseType: 'notFound' },
    badRequest: { description: 'invalid data', responseType: 'badRequest' },
  },

  fn: async function(inputs, exits) {
    sails.log.info(`=====> students/get-detail`);
    await Students.findOne({
      where: { id: inputs.studentId, state: true },
    }).exec((err, result) => {
      if (err) {
        return exits.success({
          code: 1,
          message: 'Hệ thống đang bận, vui lòng quay lại sau',
          data: { err: err.message },
        });
      }
      if (!result) {
        return exits.success({
          code: 2,
          message: 'Hệ thống đang bận, vui lòng quay lại sau',
          data: {},
        });
      }
      return exits.success({
        code: 0,
        message: '',
        data: result,
      });
    });
  },
};
