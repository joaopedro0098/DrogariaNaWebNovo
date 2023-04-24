const {Model, DataTypes}=  require('sequelize');
class Endereco extends Model {
  static init (sequelize){
   super.init({
      name: DataTypes.STRING,        
      email: DataTypes.STRING, 
      clienteId:DataTypes.INTEGER, 
      rua:DataTypes.STRING,
      numero:DataTypes.INTEGER,
      complemento:DataTypes.STRING, 
      estado:DataTypes.STRING,
      cidade:DataTypes.STRING, 
      

      
   }, {
    sequelize
   })
  }
  static associate (models){
    this.belongsTo(models.Pedido,{
      foreignKey:'clienteId',
    })
    this.belongsTo(models.Cliente)

    
  }
};

module.exports = Endereco; 