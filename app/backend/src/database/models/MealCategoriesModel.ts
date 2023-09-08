import { DataTypes, Model } from 'sequelize';
import sequelize from '.';

export interface mealCategoriesAtributtes {
  id: number;
  strCategory: string; 
}

export type mealCategoriesCreationAttributes = Omit<mealCategoriesAtributtes, 'id'>;

class MealCategoriesModel extends Model<mealCategoriesAtributtes, mealCategoriesCreationAttributes> {
  declare id: number;
  declare strCategory: string;
}

MealCategoriesModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    strCategory: {
      allowNull: false,
      type: DataTypes.STRING,   
    }
},
  {
    tableName: 'mealCategories',
    sequelize,
    timestamps: false,
    underscored: false,
  },
);

export default MealCategoriesModel;
