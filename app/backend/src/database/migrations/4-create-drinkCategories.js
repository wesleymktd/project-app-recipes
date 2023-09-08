module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('drinkCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strCategory: {
        allowNull: false,
        type: Sequelize.STRING,   
      },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('drinkCategories');
    },
  };
  