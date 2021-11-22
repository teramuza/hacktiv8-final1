const db = require('../config/db');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body;

  await bcrypt.hash(password, 10, (err, encrypt) => {
    db.query(`INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${encrypt}') `, (err, result) => {
      if (err) {
        return res.status(400).json({
          status: 'error',
          message: err.message
        })
      } else {
        return res.status(201).json({
          status: 'success',
          message: 'success add data',
          data: result.rows
        })
      }
    })
  });

}