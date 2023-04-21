'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'PedidoCiente',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull:false, 
          primaryKey:true,
          autoIncrement:true
        },
        clienteId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          
          references: {
            model: 'Cliente',
            key: 'id'
          },
        },
        dataPedido: {
          allowNull: false,
          type: Sequelize.DATE
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
    
      })
      
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('PedidoCliente'); 
  }
};
