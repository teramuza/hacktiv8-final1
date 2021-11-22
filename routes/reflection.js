const express = require('express');
const router = express.Router();
const reflections  = require('../controller/reflections');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, reflections.createReflections);
router.put('/:id', verifyToken, reflections.updateReflections);

module.exports = router;