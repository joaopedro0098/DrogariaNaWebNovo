'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Cliente', 
      { 
        id: {
        type: Sequelize.INTEGER,
        allowNull:false, 
        primaryKey:true,
        autoIncrement:true
       },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email:{
          type: Sequelize.STRING,
          allowNull: false
        } ,
        senha: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cpf:{
          type: Sequelize.STRING,
          allowNull: false
        },
        foto:{
          type: Sequelize.STRING,
          allowNull:true, 
        },
        enderecoId:{ // pode ser enderecoId mesmo? 
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {  // fiz a importação da foreigner Key de modo correto? 
            model: 'Endereco',
            key: 'id'
          }
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
   await queryInterface.dropTable('Cliente'); 
  }   
};
