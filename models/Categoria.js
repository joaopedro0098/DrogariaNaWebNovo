const {Model, DataTypes}=  require('sequelize');
class Categorias extends Model {
  static init (sequelize){
   super.init({
      name: DataType.STRING,        
      email: DataType.STRING,  
    
   }, {
    sequelize
   })
  }
};

module.exports = Categorias; 