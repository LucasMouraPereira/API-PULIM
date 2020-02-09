const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');


router.get('/', clientsController.index);

router.post('/createClients', clientsController.store);

router.post('/loginClients', clientsController.show);


module.exports = router;