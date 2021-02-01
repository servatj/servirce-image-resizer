const express = require('express');
const router = express.Router();


router.post('/task', async function(req, res) {
  res.status(200);
  res.send();
});

router.get('/task/:taskId', async function(req, res) {
  res
  .status(200)
  .send('result');
});

router.get('/', async function(req, res) {
  res
  .status(200)
  .send('home');
});

module.exports = router;
