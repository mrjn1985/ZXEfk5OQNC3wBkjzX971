module.exports = {
  friendlyName: 'Add qa',

  description: '',

  inputs: {
    qaTypeId: { type: 'number' },
    qaCategoryId: { type: 'number' },
    content: { type: 'string' },
  },

  exits: {},

  fn: async function(inputs, exits) {
    await Qa.create({
      content: inputs.content,
      qaCategoryId: inputs.qaCategoryId,
      qaTypeId: inputs.qaTypeId,
    })
      .then(result => {
        if (result) {
          return exits.success({
            code: 0,
            message: '',
            data: result,
          });
        }
      })
      .catch(err => {
        if (err) {
          return exits.success({
            code: 1,
            message: 'Hệ thống đang bận vui lòng quay lại sau',
            data: {
              err: err.message,
            },
          });
        }
      });
  },
};
