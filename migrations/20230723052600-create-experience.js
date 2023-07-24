"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Experiences", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uerId: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      companyName: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: { msg: "Company name is required" },
        },
      },
      location: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: { msg: "Location is required" },
        },
      },
      designation: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: { msg: "Designation is required" },
        },
      },
      startDate: {
        type: Sequelize.DATE,
        validate: {
          notEmpty: { msg: "Start date is required" },
        },
      },
      endDate: {
        type: Sequelize.DATE,
      },
      present: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable("Experiences");
  },
};
