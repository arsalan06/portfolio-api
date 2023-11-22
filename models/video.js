"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.belongsTo(models.Project, { foreignKey: "projectId" });
    }
  }
  Video.init(
    {
      projectVideo: DataTypes.STRING,
      projectId: {
        type: DataTypes.INTEGER,
        unique: {
          args: true,
          msg: "id already in use!",
        },
      },
    },
    {
      sequelize,
      modelName: "Video",
    }
  );
  return Video;
};
