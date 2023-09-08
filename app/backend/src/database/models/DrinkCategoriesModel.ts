import { DataTypes, Model } from 'sequelize';
import sequelize from '.';

export interface drinkCategoriesAtributtes {
  id: number;
  strCategory: string; 
}

export type drinkCategoriesCreationAttributes = Omit<drinkCategoriesAtributtes, 'id'>;

class DrinkCategoriesModel extends Model<drinkCategoriesAtributtes, drinkCategoriesCreationAttributes> {
  declare id: number;
  declare strCategory: string;
}

DrinkCategoriesModel.init(
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
    tableName: 'drinkCategories',
    sequelize,
    timestamps: false,
    underscored: false,
  },
);

export default DrinkCategoriesModel;
