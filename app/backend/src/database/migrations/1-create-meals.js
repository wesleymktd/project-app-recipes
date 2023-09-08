module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('meals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idMeal: {
        allowNull: false,
        type: Sequelize.STRING,   
      },
      strMeal: {
        allowNull: false,
        type: Sequelize.STRING,   
      },
      strDrinkAlternate: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strCategory: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strArea: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strInstructions: {
        allowNull: true,
        type: Sequelize.TEXT,   
      },
      strMealThumb: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strTags: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strYoutube: {
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
      strIngredient16: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient17: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient18: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient19: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strIngredient20: {
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
      strMeasure16: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure17: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure18: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure19: {
        allowNull: true,
        type: Sequelize.STRING,   
      },
      strMeasure20: {
        allowNull: true,
        type: Sequelize.STRING,   
      }, 
      strSource: {
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
      await queryInterface.dropTable('meals');
    },
  };
  