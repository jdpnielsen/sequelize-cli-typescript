import { QueryInterface, SequelizeStatic } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface, sequelize: SequelizeStatic) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface: QueryInterface, sequelize: SequelizeStatic) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
