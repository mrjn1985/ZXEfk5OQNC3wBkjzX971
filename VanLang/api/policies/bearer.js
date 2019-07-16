const jwToken = require('../services/isAuthen');

module.exports = (req, res, next) => {
  var token;
  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');
    if (parts.length === 2) {
      var scheme = parts[0];
      var credentials = parts[1];
      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.json(401, {
        code: 99,
        message: 'Format is Authorization: Bearer [token]',
        data: {},
      });
    }
  } else {
    //authorization header is not present
    return res.json(401, {
      code: 999,
      message: 'No Authorization header was found',
      data: {},
    });
  }
  jwToken.verify(token, (err, decoded) => {
    if (err) {
      return res.json(401, {
        code: 9999,
        message: 'Invalid token',
        data: { err: err.message },
      });
    }
    req.user = decoded;
    next();
  });
};
