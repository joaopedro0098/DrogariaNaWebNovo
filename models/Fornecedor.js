const {Model, DataTypes}=  require('sequelize');
class Fornecedor extends Model {
  static init (sequelize){
   super.init({
      name: DataTypes.STRING,        
      email: DataTypes.STRING, 
      endereco:DataTypes.STRING,
      telefone:DataTypes.STRING,

    
   }, {
    sequelize
   })
  }
  static associate (models){
    this.hasMany(models.Produto,{
      foreignKey:'fornecedorId', 
    })
  }
};

module.exports = Fornecedor; 