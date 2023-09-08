import { DataTypes, Model } from 'sequelize';
import sequelize from '.';

export interface mealsAtributtes {
  id: number;
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: Text;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  dateModified: Date;
}

export type mealCreationAttributes = Omit<mealsAtributtes, 'id'>;

class MealsModel extends Model<mealsAtributtes, mealCreationAttributes> {
  declare id: number;
  declare idMeal: string;
  declare strMeal: string;
  declare strDrinkAlternate: string;
  declare strCategory: string;
  declare strArea: string;
  declare strInstructions: Text;
  declare strMealThumb: string;
  declare strTags: string;
  declare strYoutube: string;
  declare strIngredient1: string;
  declare strIngredient2: string;
  declare strIngredient3: string;
  declare strIngredient4: string;
  declare strIngredient5: string;
  declare strIngredient6: string;
  declare strIngredient7: string;
  declare strIngredient8: string;
  declare strIngredient9: string;
  declare strIngredient10: string;
  declare strIngredient11: string;
  declare strIngredient12: string;
  declare strIngredient13: string;
  declare strIngredient14: string;
  declare strIngredient15: string;
  declare strIngredient16: string;
  declare strIngredient17: string;
  declare strIngredient18: string;
  declare strIngredient19: string;
  declare strIngredient20: string;
  declare strMeasure1: string;
  declare strMeasure2: string;
  declare strMeasure3: string;
  declare strMeasure4: string;
  declare strMeasure5: string;
  declare strMeasure6: string;
  declare strMeasure7: string;
  declare strMeasure8: string;
  declare strMeasure9: string;
  declare strMeasure10: string;
  declare strMeasure11: string;
  declare strMeasure12: string;
  declare strMeasure13: string;
  declare strMeasure14: string;
  declare strMeasure15: string;
  declare strMeasure16: string;
  declare strMeasure17: string;
  declare strMeasure18: string;
  declare strMeasure19: string;
  declare strMeasure20: string;
  declare strSource: string;
  declare dateModified: Date;
}

MealsModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    idMeal: {
      allowNull: false,
      type: DataTypes.STRING,   
    },
    strMeal: {
      allowNull: false,
      type: DataTypes.STRING,   
    },
    strDrinkAlternate: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strCategory: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strArea: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strInstructions: {
      allowNull: true,
      type: DataTypes.TEXT,   
    },
    strMealThumb: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strTags: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strYoutube: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient1: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient2: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient3: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient4: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient5: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient6: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient7: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient8: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient9: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient10: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strIngredient11: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient12: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient13: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient14: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient15: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient16: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIngredient17: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strIngredient18: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strIngredient19: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strIngredient20: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure1: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure2: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure3: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure4: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure5: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure6: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure7: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure8: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure9: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure10: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure11: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure12: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure13: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure14: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure15: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure16: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure17: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure18: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure19: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    strMeasure20: {
      allowNull: true,
      type: DataTypes.STRING,   
  }, 
    strSource: {
      allowNull: true,
      type: DataTypes.STRING,   
  },
    dateModified: {
      allowNull: true,
      type: DataTypes.DATE,   
  }
},
  {
    tableName: 'meals',
    sequelize,
    timestamps: false,
    underscored: false,
  },
);

export default MealsModel;
