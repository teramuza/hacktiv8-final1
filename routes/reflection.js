const express = require('express');
const router = express.Router();
const reflections  = require('../controller/reflections');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, reflections.createReflections);

module.exports = router;