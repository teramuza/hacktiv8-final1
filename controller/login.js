const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const response = require('../helper/response.utils');
require('dotenv').config();

const {JWT_SECRET_KEY} = process.env;
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
          let token = jwt.sign(data, JWT_SECRET_KEY, {
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