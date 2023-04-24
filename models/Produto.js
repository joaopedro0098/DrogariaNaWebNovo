const {Model, DataTypes}=  require('sequelize');
class Produto extends Model {
  static init (sequelize){
   super.init({
      name: DataTypes.STRING,        
      decricao:DataTypes.STRING,
      preco:DataTypes.STRING, 
      fornecedorId:DataTypes.INTEGER

    
   }, {
    sequelize
   })
  }
  static associate (models){
    this.hasOne(models.Categoria,{
      foreignKey:'categoriaId',
      
    })
    this.belongsTo(models.Fornecedor)
  }
};

module.exports = Produto; 