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
        const userId = req?.user?.id;
        let date = new Date();
        date = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        db.query(`INSERT INTO reflections (success, low_point, take_away, owner_id, created_date) VALUES ('${success})', '${low_point}', '${take_away}', '${userId}', '${date}') `, (err, result) => {
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


const updateReflections = async (req, res) => {
    try {
        const {
            success,
            low_point,
            take_away
        } = req.body;
        const id = req.body;

        db.query(`UPDATE reflections SET success='${success}',low_point='${low_point}',take_away='${take_away}' WHERE id=${id}`, (err, result) => {
            if (err) {
                return res.status(400).json({
                    status: 'error',
                    message: err.message
                })
            } else {
                return res.status(201).json({
                    status: 'success',
                    message: 'success edit data',
                    data: result.rows
                })
            }
        })
    } catch (e) {
        res.status(503).send(e.message);
    }
}

module.exports = {
    createReflections,
    updateReflections
}