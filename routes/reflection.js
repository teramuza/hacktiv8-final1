const express = require('express');
const router = express.Router();
const reflections  = require('../controller/reflections');

router.post('/', reflections.createReflections);

module.exports = router;