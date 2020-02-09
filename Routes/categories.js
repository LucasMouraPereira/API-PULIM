const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/', categoriesController.index);

router.post('/createCategories', categoriesController.store);


module.exports = router;