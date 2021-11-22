const express = require('express');
const router = express.Router();
const reflections  = require('../controller/reflections');

router.post('/', reflections.createReflections);
router.put('/:id', reflections.updateReflections);

module.exports = router;