// importar a classe sequelize 
const Sequelize = require('sequelize');
const Users = require ('../models/Users');

// iportar as confirgurações
const databasesConfigurations = require('../config/database');  

// criar a conenexão 
const connection = new Sequelize(databasesConfigurations);
Users.init(connection); 


// exportar a conexão
module.exports = connection; 