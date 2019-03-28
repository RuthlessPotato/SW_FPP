'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {
      INTEGER,
      DATE,
      STRING,
    } = Sequelize;
    await queryInterface.createTable('user', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      wxname: STRING(30),
      phone: INTEGER,
      password: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('user');
  },
};

