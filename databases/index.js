// importar a classe sequelize 
const Sequelize = require('sequelize');
const Users = require ('../models/Users');
const Administrador = require ('../models/Administrador');
const Categoria = require ('../models/Categoria');
// const Cliente = require ('../models/Cliente'); ver com o thiago se da pra substituir pela Users
const Endereco = require ('../models/Endereco');
const Fornecedor = require ('../models/Fornecedor');
const PedidoCliente = require ('../models/PedidoCliente');
const Produto = require ('../models/Produto');


// iportar as confirgurações
const databasesConfigurations = require('../config/database');  

// criar a conenexão 
const connection = new Sequelize(databasesConfigurations);

Administrador.init(connection); 
Categoria.init(connection); 
Endereco.init(connection); 
Fornecedor.init(connection); 
PedidoCliente.init(connection); 
Produto.init(connection); 
Users.init(connection); 
// Cliente.init(connection); ver com o thiago se da pra substituir pela Users

// exportar a conexão
module.exports = connection; 