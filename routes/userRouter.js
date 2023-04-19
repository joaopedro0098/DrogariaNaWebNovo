const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/login', userController.showLogin);
router.post('/create', userController.createUser);
router.get('/list', userController.listUsers);
router.get('/list/:id',userController.listUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser); 

module.exports = router;


