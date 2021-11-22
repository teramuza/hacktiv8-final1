const jwt = require('jsonwebtoken')
const response = require('../helper/response.utils')

module.exports = async (req, res, next) => {
  const token = req.headers['x-access-token']
  if (!token)
    return response.forbiddenResponse(res, 'access token required');

  jwt.verify(token, 'aff4d19955f3afe4a1ec122e969750d09c77510cdb9eca85df4335663563', function (err, decoded) {
    if (err)
      return response.unauthorizedResponse(res, err.message);

    req.user = decoded;
    return next();
  })
}