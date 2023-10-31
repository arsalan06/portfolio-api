"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Skills", {
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
      },
      title: {
        type: Sequelize.STRING,
      },
      isCoreSkill: {
        type: Sequelize.BOOLEAN,
        validate: {
          notEmpty: { msg: "core flage is required" },
        },
      },
      ratePercent: {
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: { msg: "skill title is required" },
        },
      },
      description: {
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
    // await queryInterface.addIndex('Skills', ['userName'], {
    //   name: "userName",
    //   unique:false,
    // })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Skills");
  },
};
