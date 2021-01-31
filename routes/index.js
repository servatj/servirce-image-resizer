const express = require('express');
const router = express.Router();



router.post('/task', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/task/:taskId', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
