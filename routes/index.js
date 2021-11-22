const express = require('express');
const router = express.Router();
const userRoute = require('./user');
const reflections = require('./reflection');
const verifyToken = require('../middleware/verifyToken');

router.use('/users', userRoute);
router.use('/reflections', verifyToken, reflections);

module.exports = router;