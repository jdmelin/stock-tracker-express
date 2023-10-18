'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'John',
          lastName: 'Smith',
          email: 'jsmith@test.com',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'janedoe@test.com',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Bill',
          lastName: 'Johnson',
          email: 'billjohnson@test.com',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
