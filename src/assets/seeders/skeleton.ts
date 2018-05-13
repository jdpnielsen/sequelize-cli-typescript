import { QueryInterface, SequelizeStatic } from 'sequelize';

exports = {
  up: async (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
