"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      profilePic: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      secondPhoneNumber: {
        type: Sequelize.STRING,
      },
      telegram: {
        type: Sequelize.STRING,
      },
      skype: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          len: [8],
        },
      },
      languages: {
        type: Sequelize.JSON,
        validate: {
          notEmpty: { msg: "Language is required" },
        },
      },
      totalExperience: {
        type: Sequelize.STRING,
      },
      totalProject: {
        type: Sequelize.STRING,
      },
      numberAward: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
