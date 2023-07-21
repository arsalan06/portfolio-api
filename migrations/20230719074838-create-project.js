'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:{
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: { msg: "user id is required" }
        }
      },
      projectName: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: { msg: "Project name is required" }
        }
      },
      projectDuration: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: { msg: "Project duration is required" }
        }
      },
      projectTech: {
        type: Sequelize.JSON,
        validate: {
          notEmpty: { msg: "Project tech is required" }
        }
      },
      projectDescription: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: { msg: "Project description is required" }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};