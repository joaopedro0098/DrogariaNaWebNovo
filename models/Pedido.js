'use strict';
const {
  Model, STRING
} = require('sequelize');

class Pedido extends Model {
  static init (sequelize){
    super.init({
      enderecoId:DataTypes.INTEGER,
      valor:DataTypes.FLOAT,
      clienteId:DataTypes.STRING, 


    }, {
     sequelize
    })
   }
  static associate(models) {
    this.belongsTo(models.Cliente,{
      foreignKey:'clienteId',
    })
    this.belongsTo(models.Endereco,{
      foreignKey:'enderecoId', 
    })
  }
    
}
