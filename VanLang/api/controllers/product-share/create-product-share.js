const path = require('path');
const fs = require('fs');

module.exports = {
  friendlyName: 'Create product share',

  description: 'create product share',

  inputs: {
    studentId: { description: 'id of student', type: 'number', required: true },
    categoryId: {
      description: 'id category of product share',
      type: 'number',
      required: true,
    },
    name: {
      description: 'name of product share',
      type: 'string',
      required: true,
    },
    content: { description: 'content of product share', type: 'string' },
    imagePs: { description: 'image of product share', type: 'ref' },
  },

  exits: {
    serverError: {
      responseType: 'server error',
      description: 'Failed to upload or create products share',
    },
    badRequest: {
      responseType: 'no file',
      description: 'no file upload',
    },
  },

  fn: async function(inputs, exits) {
    const moment = require('moment');
    if (inputs.imagePs && Array.isArray(inputs.imagePs)) {
      await ProductsShare.create({
        studentId: inputs.studentId,
        categoryId: inputs.categoryId,
        name: inputs.name,
        content: inputs.content,
      })
        .then(async psResult => {
          if (!psResult) {
            return exits.success({
              code: 2,
              message: 'Lỗi tạo sản phẩm, vui lòng quay lại sau',
              data: {},
            });
          }
          var pathUpload = `${path.join(__dirname, '../../../images')}\\${
            inputs.studentId
          }\\${moment().format('YYYYMMDD')}\\`;
          if (!fs.existsSync(pathUpload)) {
            fs.mkdir(pathUpload, { recursive: true }, err => {
              if (err) {
                throw err;
              }
            });
          }

          var images = [];
          inputs.imagePs.forEach(async image => {
            await sails.helpers.decodeImageBase64
              .with({
                dataString: image.data,
                pathUpload: pathUpload,
              })
              .then(async imageUploaded => {
                images.push({
                  productId: psResult.productId,
                  name: imageUploaded.filename,
                  imageUrl: imageUploaded.path,
                  imageFd: 'NA',
                  state: true,
                });
              })
              .catch(error => {
                sails.log.error(error);
              });
          });

          await ProductsShareImage.createEach(images).exec(
            (error, createdPsImages) => {
              if (error) {
                return exits.success({
                  code: 3,
                  message: 'Lỗi tạo product share image',
                  data: { err: error.message },
                });
              }
              return exits.success({
                code: 0,
                message: '',
                data: {
                  product: psResult,
                  images: createdPsImages,
                },
              });
            }
          );
        })
        .catch(error => {
          return exits.success({
            code: 1,
            message: 'Lỗi tạo sản phẩm, vui lòng quay lại sau',
            data: { err: error.message },
          });
        });
    }
  },
};
