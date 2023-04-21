const express = require('express');
const detalheProdutoController = require('../controllers/detalheProdutoController')
const router = express.Router();

router.get('/detalheProduto/:id',detalheProdutoController.detalheProduto);

module.exports = router;