const Users = require('../models/Users');

function showLogin (req, res){ 
    res.render('loginPage')
}
function index (req, res){ 
    res.send('O aplicativo está funcionando')
};

async function createUser (req, res) {
    const {name,email} = req.body;
    const createdUser = await Users.create({nome, email});

    return res.json(createdUser);
};

async function listUsers (req, res) {};

async function listUser (req, res)  {};

async function updateUser (req, res) {}; 

async  function deleteUser (req, res) {};




module.exports = {
    index,
    showLogin,
    createUser,
    listUsers,
    listUser,
    updateUser, 
    deleteUser
};

