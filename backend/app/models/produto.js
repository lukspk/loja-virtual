'use strict'
module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        uuid: {
            type : DataTypes.UUID,
            primaryKey : true,
            defaultValue: DataTypes.UUIDV4,
        },
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        imagem: DataTypes.STRING,
        valor: DataTypes.DOUBLE,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },{
       
        tableName: 'produtos',});
    Produto.associate = (models) => {
    
      }
      
  
    return Produto;
  }