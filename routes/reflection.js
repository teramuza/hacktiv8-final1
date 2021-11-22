const express = require('express');
const router = express.Router();
const reflections  = require('../controller/reflections');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, reflections.createReflections);
router.get('/', verifyToken, reflections.readReflections);
router.put('/:id', verifyToken, reflections.updateReflections);
router.delete('/:id', verifyToken, reflections.deleteReflections);

module.exports = router;