const db = require('../config/db');
const bcrypt = require('bcrypt');
const response = require('../helper/response.utils');

module.exports = async (req, res) => {
  try {
    const {
      name,
      email,
      password
    } = req.body;

    await bcrypt.hash(password, 10, (err, encrypt) => {
      db.query(`INSERT INTO users (name, email, password)
                VALUES ('${name}', '${email}', '${encrypt}') `, (err, result) => {
        if (err)
          return response.badRequestResponse(res, err.message);
        else
          return response.successResponse(res, result.rows, 'success register')
      })
    });
  } catch (e) {
    response.serverErrorResponse(res, e.message);
  }
}