const {Model, DataTypes}=  require('sequelize');
class Administrador extends Model {
  static init (sequelize){
   super.init({
      name: DataTypes.STRING,        
      email: DataTypes.STRING,  
      senha:DataTypes.STRING, 
      cpf:DataTypes.STRING,

    
   }, {
    sequelize
   })
  }
  static associate (models){
    // que tipo de relação faço 
  }
};

module.exports = Administrador; 