'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    projectName: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{msg:"Project name is required"}
      }
    },
    projectDuration:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{msg:"Project duration is required"}
      }
    },
    projectTech:{
      type:DataTypes.JSON,
      validate:{
        notEmpty:{msg:"Project tech is required"}
      }
    },
    projectImages:{
      type:DataTypes.JSON,
      validate:{
        notEmpty:{msg:"Project tech is required"}
      }
    },
    projectDescription:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{msg:"Project description is required"}
      }
    },
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};