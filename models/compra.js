'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Compra.hasMany(models.Cliente);
    }
  };
  Compra.init({
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};