const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createReflections = async (req, res) => {
    try {
        const {
            success,
            low_point,
            take_away
        } = req.body;
        const token = req.headers?.['x-access-token'];
        if (!token) {
            return res.status(401).send("unauthorized");
        }
        const jwtdata = await jwt.verify(token, 'aff4d19955f3afe4a1ec122e969750d09c77510cdb9eca85df4335663563');
        const userId = jwtdata?.id;

        db.query(`INSERT INTO reflections (success, low_point, take_away, owner_id, created_date) VALUES ('${success})', '${low_point}', '${take_away}', '${userId}', '${new Date()}') `, (err, result) => {
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
    } catch (e) {
        res.status(503).send(e.message);
    }
}

module.exports = {
    createReflections
}