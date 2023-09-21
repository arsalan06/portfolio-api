"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Skill.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Skill.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "skill title is required" },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Description is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Skill",
    }
  );
  return Skill;
};
