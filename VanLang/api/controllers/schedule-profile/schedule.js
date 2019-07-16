module.exports = {
  friendlyName: 'Schedule',

  description: 'Schedule schedule profile.',

  inputs: {
    studentCode: {
      type: 'string',
      required: true,
      description: `Mã sinh viên cần rút hồ sơ`,
    },
    fromTime: { type: 'string', description: `Thời gian nhận khoảng từ` },
    toTime: { type: 'string', description: `Thời gian nhận khoảng đến` },
    toDate: { type: 'string', description: `Ngày đến lấy hồ sơ` },
  },

  exits: {},

  fn: async function(inputs, exits) {
    await ScheduleProfile.create({
      studentCode: inputs.studentCode,
      fromTime: inputs.fromTime,
      toTime: inputs.toTime,
      toDate: inputs.toDate,
    }).excec((err, created) => {
      if (err) {
        return exits.success({
          code: 1,
          message: `Hệ thống đang bận, vui lòng thử lại sau`,
          data: {
            err: err.message,
          },
        });
      }
      return exits.success({
        code: 0,
        message: ``,
        data: created,
      });
    });
  },
};
