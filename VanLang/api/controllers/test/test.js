module.exports = {
  friendlyName: 'Test',

  description: 'Test test.',

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    var ps = {
      studentId: 1,
      categoryId: 1,
      name: 'aaaaaaaaaaaaaaa',
      content: 'bbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaacccccccccccccccc',
    };
    // await ProductsShare.create(ps).exec((err, result) =>{
    //   if(err){
    //     return exits.success({
    //       code: err.message
    //     });
    //   }
    //   if(!result){
    //     return exits.success({
    //       code: 'not result'
    //     });
    //   }
    //   return exits.success({
    //     code: 'success'
    //   });
    // });

    let bn = await Banner.create({name:'aaaaaaaa', imageUrl:'http://test'}).fetch();
    console.log({bn});

    // await Banner.updateOne(
    //   { id: 7 },
    //   { imageUrl: 'http://test_moi_update' }
    // ).exec((err, result) => {
    //   if (err) {
    //     return exits.success({
    //       code: err.message,
    //     });
    //   }
    //   if (!result) {
    //     return exits.success({
    //       code: 'not result',
    //     });
    //   }
    //   return exits.success({
    //     code: 'success',
    //   });
    // });
  },
};
