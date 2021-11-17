const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  const {
    email,
    password
  } = req.body

  
  db.query("SELECT * FROM users WHERE email = '" + email + "' ", (err, result) => {
    if (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      })
    }

    if (result.rowCount != 0) {
      const data = {
        id: result.rows[0].id,
        name: result.rows[0].name,
        email: result.rows[0].email,
      }

      const isValidPassword = bcrypt.compare(password, result.rows[0].password);
      if (isValidPassword) {
        let token = jwt.sign(data, 'finalp_1', {
          expiresIn: '1h'
        })
        res.status(200).json({
          status: 'success',
          message: 'success login',
          token
        })
      } else {
        return res.status(400).json({
          status: 'error',
          message: 'email or password incorrect'
        })
      }
    } else {
      return res.status(404).json({
        status: 'Not found',
        message: "Data tidak ditemukan",
      })
    }

  })
}