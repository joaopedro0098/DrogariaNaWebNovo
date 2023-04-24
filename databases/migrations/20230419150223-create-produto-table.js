'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Produto',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull:false, 
          primaryKey:true,
          autoIncrement:true
         },
        name:{
          type:Sequelize.STRING,
          allowNull:false, 
         },
         descricao: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        categoriaId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          
          references: {
            model: 'Categoria',
            key: 'id'
          },
        },
         preco: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
         createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }, 
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Produto'); 
  }
};
