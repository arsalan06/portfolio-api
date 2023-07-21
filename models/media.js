'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Media.belongsTo(models.User,{foreignKey:"projectId"})

    }
  }
  Media.init({
    
    projectImages:{
      type:DataTypes.JSON,
      validate:{
        notEmpty:{msg:"Project tech is required"}
      }
    },
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};