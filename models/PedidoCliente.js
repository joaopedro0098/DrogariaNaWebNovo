const {Model, DataTypes}=  require('sequelize');
class PedidoCliente extends Model {
  static init (sequelize){
   super.init({
      name: DataType.STRING,        
      email: DataType.STRING,  
    
   }, {
    sequelize
   })
  }
};

module.exports = PedidoCliente; 