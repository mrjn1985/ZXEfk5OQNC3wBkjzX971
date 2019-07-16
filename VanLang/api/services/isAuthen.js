const jwt = require('jsonwebtoken');

// eslint-disable-next-line linebreak-style
module.exports = {
  'sign': (payload) => {
    return jwt.sign({
      data: payload
    }, sails.config.custom.secretKeyToken, {expiresIn: '7d'});
  },
  'verify': (token, callback) => {
    jwt.verify(token, sails.config.custom.secretKeyToken, callback);
  }
};

