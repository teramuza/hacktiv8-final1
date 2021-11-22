const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const response = require('../helper/response.utils');

module.exports = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body


    db.query("SELECT * FROM users WHERE email = '" + email + "' ", (err, result) => {
      if (err) return response.badRequestResponse(res, err.message);

      if (result.rowCount !== 0) {
        const data = {
          id: result.rows[0].id,
          name: result.rows[0].name,
          email: result.rows[0].email,
        }

        const isValidPassword = bcrypt.compare(password, result.rows[0].password);
        if (isValidPassword) {
          let token = jwt.sign(data, 'aff4d19955f3afe4a1ec122e969750d09c77510cdb9eca85df4335663563', {
            expiresIn: '1h'
          })
          return response.successResponse(res, {token}, 'success login');
        } else {
          return response.unauthorizedResponse(res, 'email or password incorrect');
        }
      } else {
        return response.unauthorizedResponse(res, 'user not found');
      }

    })
  } catch (e) {
    response.serverErrorResponse(res, e.message)
  }
}