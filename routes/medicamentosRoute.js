const express = require('express');
const medicamentosController = require ('../controllers/medicamentosController');

const router = express.Router();

router.get('/', medicamentosController.medicamentos);

module.exports = router;