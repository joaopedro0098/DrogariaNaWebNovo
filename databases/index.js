// importar a classe sequelize 
const Sequelize = require('sequelize');

// iportar as confirgurações
const databasesConfigurations = require('../config/database');  

// criar a conenexão 
const connection = new Sequelize(databasesConfigurations);

// exportar a conexão
module.exports = connection; 