'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
     'Fornecedor',
     {
      id:{
        type:Sequelize.INTEGER,
        allowNull:false, 
        primaryKey:true, 
        autoIncrement:true  
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
     }

      )
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('Fornecedor');
  }
};
