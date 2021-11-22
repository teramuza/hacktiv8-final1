const db = require('../config/db');
const response = require('../helper/response.utils');

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
            if (err)
                return response.badRequestResponse(res, err.message);
            else
                return response.successResponse(res,result.rows, 'success add data');
        })
    } catch (e) {
        response.serverErrorResponse(res, e.message);
    }
}

const readReflections = async (req, res) => {
    try {
        const user_id = req.user?.id;
        db.query(`SELECT * FROM reflections WHERE owner_id=${user_id}`, (err, result) => {
            if (err)
                return response.badRequestResponse(res, err.message);
            else
                return response.successResponse(res, result.rows);
        });
    } catch (e) {
        response.serverErrorResponse(res, e.message);
    }
}

const updateReflections = async (req, res) => {
    try {
        const {
            success,
            low_point,
            take_away
        } = req.body;
        const id = req.params?.id;
        if (!id)
            return response.badRequestResponse(res, 'id reflection dibutuhkan')

        db.query(`UPDATE reflections SET success='${success}',low_point='${low_point}',take_away='${take_away}' WHERE id=${id}`, (err, result) => {
            if (err)
                return response.badRequestResponse(res, err.message);
            else
                return response.successResponse(res,result.rows, 'success edit data');
        })
    } catch (e) {
        response.serverErrorResponse(res, e.message);
    }
}

const deleteReflections = async (req, res) => {
    try {
        const user_id = req.user?.id;
        const id = req.params?.id;
        if (!id)
            return response.badRequestResponse(res, 'id reflection dibutuhkan')

        db.query(`DELETE from reflections WHERE id=${id} AND owner_id=${user_id}`, (err) => {
            if (err)
                return response.badRequestResponse(res, err.message);
            else
                return response.successResponse(res, _, 'success delete data');
        });
    } catch (e) {
        response.serverErrorResponse(res, e.message);
    }
}

module.exports = {
    createReflections,
    readReflections,
    updateReflections,
    deleteReflections
}