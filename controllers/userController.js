const Cliente = require('../models/Cliente');

function showLogin (req, res){ 
    res.render('loginPage')
}
function index (req, res){ 
    res.send('O aplicativo está funcionando')
};

async function createCliente (req, res) {
    const {name,email} = req.body;
    const createdCliente = await Cliente.create({nome, email,cpf, senha});

    return res.json(createdCliente);
};

async function listClientes (req, res) {
    const clientes = await Cliente.findAll();
    return res.json(clientes);
};

async function listClientes (req, res)  {};

async function updateCliente (req, res) {}; 

async  function deleteCliente (req, res) {};




module.exports = {
    index,
    showLogin,
    createCliente,
    listClientes,
    listClientes,
    updateCliente, 
    deleteCliente
};

