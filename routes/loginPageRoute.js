const express = require('express');
const loginPageController = require('../controllers/loginPageController');

const router = express.Router();

router.get('/', loginPageController.loginPage);

module.exports = router;