const express = require('express');
const router = express.router();
const topicController = require('../controllers/topicControllers');

router.get('/', topicController.index);
router.post('/insert', topicController.insert);

module.exports = router;


