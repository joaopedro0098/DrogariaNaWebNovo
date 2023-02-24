const express = require('express');
const indexController = require('../controllers/indexController')
const categorias = require('../models/categorias.json')

const router = express.Router();

router.get('/', indexController.index);



module.exports = router;