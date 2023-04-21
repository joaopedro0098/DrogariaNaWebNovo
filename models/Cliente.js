const {Model, DataTypes}=  require('sequelize');
class Cliente extends Model {
  static init (sequelize){
   super.init({
      name: DataTypes.STRING,        
      email: DataTypes.STRING,  
      senha: DataTypes.STRING,
      cpf: DataTypes.STRING,
      foto:DataTypes.STRING, 
      enderecoId:DataTypes.INTEGER
   }, {
    sequelize
   })
  }
  static associate (models){
    this.hasOne(models.Endereco,{
      foreignKey:'enderecoId',
      
    })
  }
};

module.exports = Cliente; 