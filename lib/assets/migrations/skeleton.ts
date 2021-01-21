import { QueryInterface, Sequelize } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
    /*
      Add altering commands here.

      Example:
      await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
    /*
      Add reverting commands here.

      Example:
      await queryInterface.dropTable('users');
    */
  }
};
