module.exports = {


  friendlyName: 'Get percent',


  description: 'trả về phần trăm theo type của công việc',


  inputs: {

  },


  exits: {
    notFound: {
      description: 'not found',
      responseType: 'notFound',
    },
  },


  fn: async function (inputs, exits) {
    sails.log.info(`====> jobs/get-percent`);
    await sails.sendNativeQuery(
      `call ${sails.config.custom.schemaDb}.jobs_percentByType`,
      (err, percents) => {
        if (err) {
          sails.log.error(err.message);
          return exits.success({
            code: 0,
            message: '',
            data: {}
          });
        }
        return exits.success({
          code: 0,
          message: '',
          data: percents.rows[0],
        });
      }
    );

  }


};
