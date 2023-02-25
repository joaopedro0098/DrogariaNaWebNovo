const express = require('express');
const contatoController = require('../controllers/contatoController')

const router = express.Router();

router.get('/', contatoController.contato);

module.exports = router;