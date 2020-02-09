const express = require('express');
const router = express.Router();
const pathsController = require('../controllers/pathsController');

router.get('/', pathsController.index);

router.post('/createPaths', pathsController.store);


module.exports = router;