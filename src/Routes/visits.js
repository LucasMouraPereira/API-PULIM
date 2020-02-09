const express = require('express');
const router = express.Router();
const visitsController = require('../controllers/visitsController');

router.get('/', visitsController.index);

router.post('/createVisit', visitsController.store);

module.exports = router;