"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Clients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userName: {
        type: Sequelize.STRING,
        references: { model: "Users", key: "userName" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notEmpty: { msg: "userName is required" },
        },
      },
      clientName: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.STRING,
      },
      clientImage: {
        type: Sequelize.STRING,
      },
      ratting: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Clients");
  },
};
