const express = require('express');
const router = express.Router();

const { processImage, statusProcess } = require('../controller/imageController');

router.post('/task', processImage);

router.get('/task/:taskId', statusProcess);

module.exports = router;
