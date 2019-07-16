module.exports = {
  friendlyName: 'Decode image base 64',

  description: '',

  inputs: {
    dataString: { type: 'string' },
    pathUpload: { type: 'string' },
  },

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function(inputs) {
    const imageTypeRegularExpression = /\/(.*?)$/;
    const crypto = require('crypto');
    const fs = require('fs');
    var matches = inputs.dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var seed = crypto.randomBytes(20);
    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }
    var imageBuffer = {
      type: matches[1],
      data: new Buffer(matches[2], 'base64'),
    };

    var uniqueSHA1String = await crypto
      .createHash('sha1')
      .update(seed)
      .digest('hex');
    //file name
    var uniqueRandomImageName = 'image-' + uniqueSHA1String;
    //file type
    var imageTypeDetected = imageBuffer.type.match(imageTypeRegularExpression);
    var userUploadedImagePath =
      inputs.pathUpload + uniqueRandomImageName + '.' + imageTypeDetected[1];

    try {
      await fs.writeFile(userUploadedImagePath, imageBuffer.data, 'base64', (err) => {
        if(err){
          console.log('ERROR:', err);
        }
        console.log(
          'DEBUG - image:upload: Saved to disk image attached by user:',
          userUploadedImagePath
        );
      });
    } catch (error) {
      console.log('ERROR:', error);
    }
    return { filename: uniqueRandomImageName, path: userUploadedImagePath };
  },
};
