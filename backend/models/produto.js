module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('User', {
        id: DataTypes.UUID,
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        imagem: DataTypes.STRING,
        valor: DataTypes.DOUBLE,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });
  
    return User;
  }