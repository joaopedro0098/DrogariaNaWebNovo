const {Model, DataTypes}=  require('sequelize');
class Categorias extends Model {
  static init (sequelize){
   super.init({
      name: DataTypes.STRING,          
    
   }, {
    sequelize
   })
  }
  static associate (models){
    this.hasMany(models.Produto,{
      foreignKey:'categoriaId', 
    })
  }
};

module.exports = Categorias; 