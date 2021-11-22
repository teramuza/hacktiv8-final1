const jwt = require('jsonwebtoken')
const response = require('../helper/response.utils')
require('dotenv').config();

const {JWT_SECRET_KEY} = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers['x-access-token']
  if (!token)
    return response.forbiddenResponse(res, 'access token required');

  jwt.verify(token, JWT_SECRET_KEY, function (err, decoded) {
    if (err)
      return response.unauthorizedResponse(res, err.message);

    req.user = decoded;
    return next();
  })
}