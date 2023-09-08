import { DataTypes, Model } from 'sequelize';
import sequelize from '.';

export interface drinksAtributtes {
  id: number;
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string;
  strDrinkES: string;
  strDrinkDE: string;
  strDrinkFR: string;
  'strDrinkZH-HANS': string;
  'strDrinkZH-HANT': string;
  strTags: string;
  strVideo: string;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string;
  strInstructionsDE: string;
  strInstructionsFR: string;
  'strInstructionsZH-HANS': string;
  'strInstructionsZH-HANT': string;
  strDrinkThumb: string;
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
  strCreativeCommonsConfirmed: string;
  dateModified: Date;
}

export type drinkCreationAttributes = Omit<drinksAtributtes, 'id'>;

class DrinksModel extends Model<drinksAtributtes, drinkCreationAttributes> {
  declare id: number;
  declare idDrink: string;
  declare strDrink: string;
  declare strDrinkAlternate: string;
  declare strDrinkES: string;
  declare strDrinkDE: string;
  declare strDrinkFR: string;
  declare 'strDrinkZH-HANS': string;
  declare 'strDrinkZH-HANT': string;
  declare strTags: string;
  declare strVideo: string;
  declare strCategory: string;
  declare strIBA: string;
  declare strAlcoholic: string;
  declare strGlass: string;
  declare strInstructions: string;
  declare strInstructionsES: string;
  declare strInstructionsDE: string;
  declare strInstructionsFR: string;
  declare 'strInstructionsZH-HANS': string;
  declare 'strInstructionsZH-HANT': string;
  declare strDrinkThumb: string;
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
  declare strCreativeCommonsConfirmed: string;
  declare dateModified: Date;
}

DrinksModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idDrink: {
      allowNull: false,
      type: DataTypes.STRING,   
    },
    strDrink: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strDrinkAlternate: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strDrinkES: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strDrinkDE: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strDrinkFR: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    'strDrinkZH-HANS': {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    'strDrinkZH-HANT': {
      allowNull: true,
      type: DataTypes.STRING,
    },
    strTags: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strVideo: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strCategory: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strIBA: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strAlcoholic: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strGlass: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strInstructions: {
      allowNull: true,
      type: DataTypes.TEXT,   
    },
    strInstructionsES: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    strInstructionsDE: {
      allowNull: true,
      type: DataTypes.TEXT,   
    },
    strInstructionsFR: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    'strInstructionsZH-HANS': {
      allowNull: true,
      type: DataTypes.STRING,  
    },
    'strInstructionsZH-HANT': {
      allowNull: true,
      type: DataTypes.STRING,  
    },
    strDrinkThumb: {
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
    strCreativeCommonsConfirmed: {
      allowNull: true,
      type: DataTypes.STRING,   
    },
    dateModified: {
      allowNull: true,
      type: DataTypes.DATE,   
    }
  },
  {
    tableName: 'drinks',
    sequelize,
    timestamps: false,
    underscored: false,
  },
);

export default DrinksModel;
