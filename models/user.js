"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Client, { foreignKey: "userName" });
      User.hasMany(models.Project, { foreignKey: "userName" });
      User.hasMany(models.Experience, { foreignKey: "userName" });
      User.hasMany(models.Skill, { foreignKey: "userName" });
    }
  }
  User.init(
    {
      fullName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "name is required" },
        },
      },
      userName: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
          notEmpty: { msg: "name is required" },
        },
        unique: {
          args: true,
          msg: "userName already in use!",
        },
      },
      profilePic: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Profile pic is required" },
        },
      },
      tageLines: {
        type: DataTypes.JSON,
        validate: {
          notEmpty: { msg: "Language is required" },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "email address already in use!",
        },
        validate: {
          notEmpty: { msg: "email is required" },
          isEmail: true,
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "phoneNumber is required" },
        },
      },
      secondPhoneNumber: {
        type: DataTypes.STRING,
      },
      telegram: {
        type: DataTypes.STRING,
      },
      skype: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Country is required" },
        },
      },
      state: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "State is required" },
        },
      },
      city: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "City is required" },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [8],
        },
      },
      languages: {
        type: DataTypes.JSON,
        validate: {
          notEmpty: { msg: "Language is required" },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: { msg: "Age is required" },
        },
      },
      socialLinks: {
        type: DataTypes.JSON,
        validate: {
          notEmpty: { msg: "Age is required" },
        },
      },
      totalExperience: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Experience is required" },
        },
      },
      totalProject: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Project is required" },
        },
      },
      numberAward: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Award is required" },
        },
      },
      role: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Role is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      indexes: [
        {
          unique: true,
          fields: ["userName"],
        },
      ],
    }
  );
  User.beforeCreate((user) => {
    return hashPassword(user);
  });

  User.beforeUpdate((user) => {
    if (user.changed("password")) {
      return hashPassword(user);
    }
  });
  User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return User;
};

async function hashPassword(user) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(user.password, saltRounds);
  user.password = hashedPassword;
}
