import { QueryInterface, SequelizeStatic } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    /*
      Add altering commands here.

      Example:
      await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: async (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    /*
      Add reverting commands here.

      Example:
      await queryInterface.dropTable('users');
    */
  }
};
