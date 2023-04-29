const express = require('express');
const detalheProdutoController = require('../controllers/detalheProdutoController')
const router = express.Router();

router.get('/detalheProduto/:id',detalheProdutoController.detalheProduto);
router.post('/detalheProduto/:id', detalheProdutoController.create);
module.exports = router;