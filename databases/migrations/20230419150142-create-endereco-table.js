'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable(
   'Endereco',
   {
     id:{
          type:Sequelize.INTEGER,
          allowNull:false, 
          primaryKey:true, 
          autoIncrement:true  
        }, 
       clienteId:{
          type:Sequelize.INTEGER,
          allowNull:false, 

          references: {
            model: 'Cliente',
            key: 'id'
          },
         },
         rua: {
          type: Sequelize.STRING,
          allowNull: false
         },
         numero:{
          type: Sequelize.INTEGER,
          allowNull: false
         },
         complemento:{
          type: Sequelize.STRING,
          allowNull: true,
         },
         estado:{
          type: Sequelize.STRING,
          allowNull: false
         },
         cidade:{
          type: Sequelize.STRING,
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

   
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Endereco'); 

  }
};
