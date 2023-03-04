const express = require('express');
const productsController = require ('../controllers/productsController');

const router = express.Router();

router.get('/listAllProducts', productsController.listAll);

router.get('/productDetail/:id', productsController.productDetail)

module.exports = router;