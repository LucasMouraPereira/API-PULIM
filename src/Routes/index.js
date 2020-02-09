const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({mgs: 'tudo ok com o método GET da raiz!'});
});

router.post('/', (req, res) => {
    return res.send({mgs: 'tudo ok com o método POSTda raiz!'});
});

module.exports = router;