'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.dropTable('user_followers')
  },

  async down (queryInterface, Sequelize) {
  }
};
