const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/', usersController.index);

router.post('/createUsers', usersController.store);

router.post('/loginUsers', usersController.show);

module.exports = router;