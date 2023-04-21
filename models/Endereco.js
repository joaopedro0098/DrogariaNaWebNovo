const {Model, DataTypes}=  require('sequelize');
class Endereco extends Model {
  static init (sequelize){
   super.init({
      name: DataType.STRING,        
      email: DataType.STRING,  
      
   }, {
    sequelize
   })
  }
  static associate (models){
    this.belongsTo(models.Cliente,{
      foreignKey:'enderecoId',
    })
  }
};

module.exports = Endereco; 