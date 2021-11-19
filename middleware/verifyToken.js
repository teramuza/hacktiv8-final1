const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const token = req.headers.authorization

  jwt.verify(token, 'aff4d19955f3afe4a1ec122e969750d09c77510cdb9eca85df4335663563', function (err, decoded) {
    if (err) {
      return res.status(403).json({
        message: err.message
      })
    }

    req.user = decoded;
    return next();
  })
}