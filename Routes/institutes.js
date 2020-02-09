const express = require('express');
const router = express.Router();
const institutesController = require('../controllers/institutesController');

router.get('/', institutesController.index);

router.post('/createInstitute', institutesController.store);

module.exports = router;