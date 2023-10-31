'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn("users","age",{
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: { msg: "Age is required" },
    
      }
    });
    queryInterface.addColumn("users","socialLinks",{
        type: Sequelize.JSON,
        validate: {
          notEmpty: { msg: "socialLinks is required" },
        
      }});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("users","age");
    await queryInterface.removeColumn("users","socialLinks");

  }
};
