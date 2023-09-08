module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('drinks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idDrink: {
        allowNull: false,
        type: Sequelize.STRING,   
      },
      strDrink: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strDrinkAlternate: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strDrinkES: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strDrinkDE: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strDrinkFR: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      'strDrinkZH-HANS': {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      'strDrinkZH-HANT': {
        allowNull: true,
        type: Sequelize.STRING,
      },
      strTags: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strVideo: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strCategory: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIBA: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strAlcoholic: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strGlass: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strInstructions: {
        allowNull: true,
        type: Sequelize.TEXT,   
      },
      strInstructionsES: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strInstructionsDE: {
        allowNull: true,
        type: Sequelize.TEXT,   
      },
      strInstructionsFR: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      'strInstructionsZH-HANS': {
        allowNull: true,
        type: Sequelize.STRING,  
      },
      'strInstructionsZH-HANT': {
        allowNull: true,
        type: Sequelize.STRING,  
      },
      strDrinkThumb: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient1: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient2: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient3: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient4: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient5: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient6: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient7: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient8: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient9: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient10: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient11: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient12: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient13: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient14: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient15: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure1: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure2: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure3: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure4: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure5: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure6: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure7: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure8: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure9: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure10: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure11: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure12: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure13: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure14: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure15: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strCreativeCommonsConfirmed: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      dateModified: {
        allowNull: true,
        type: Sequelize.DATE,   
      }
    });
  },
    down: async (queryInterface) => {
      await queryInterface.dropTable('drinks');
    },
};
  