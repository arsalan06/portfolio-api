"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Experience.belongsTo(models.User,{foreignKey:"userId"})
    }
  }
  Experience.init(
    {
      companyName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Company name is required" },
        },
      },
      location: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Location is required" },
        },
      },
      designation: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Designation is required" },
        },
      },
      startDate: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: { msg: "Start date is required" },
        },
      },
      endDate: {
        type: DataTypes.DATE,
      },
      present: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
      },
    },
    {
      sequelize,
      modelName: "Experience",
    }
  );
  return Experience;
};
