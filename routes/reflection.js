const express = require('express');
const router = express.Router();
const reflections  = require('../controller/reflections');

router.post('/', reflections.createReflections);
router.get('/', reflections.readReflections);
router.put('/:id', reflections.updateReflections);
router.delete('/:id', reflections.deleteReflections);

module.exports = router;