const express = require('express');
const detalheProdutoController = require('../controllers/detalheProdutoController')
const categorias = require('../models/categorias.json')

const router = express.Router();

router.get('/detalheProduto/:id',detalheProdutoController.detalheProduto);



module.exports = router;