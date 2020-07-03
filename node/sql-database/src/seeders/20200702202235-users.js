'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Simon',
          email: 'simon@test.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ana',
          email: 'ana@test.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Juan',
          email: 'juan@test.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
