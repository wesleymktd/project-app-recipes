import { Op } from "sequelize";
import DrinkCategoriesModel, { drinkCategoriesAtributtes } from "../database/models/DrinkCategoriesModel";
import DrinksModel, { drinksAtributtes } from "../database/models/DrinksModel";

export default class DrinksService {
	public static async getAll(): Promise<drinksAtributtes[]> {
		const drinks = await DrinksModel.findAll();
		return drinks;
	}

	public static async findByName(name: string | number | undefined): Promise<drinksAtributtes[] | undefined | { message: string } | number> {
		if (name) {
			const drinkByName = await DrinksModel.findAll({
				where: {
					strDrink: {
						[Op.like]: `%${name}%`,
					},
				},
			});

			if (drinkByName.length === 0) {
				return ({ message: 'Invalid input, or no drink starts with that letter.' });
			}

			return drinkByName;
		}
		const allMeals = await DrinksModel.findAll();
		return allMeals;
	}

	public static async getAllCategories(): Promise<drinkCategoriesAtributtes[]> {
		const drinks = await DrinkCategoriesModel.findAll();
		return drinks;
	}

	public static async getDrinksByCategory(name: string): Promise<drinkCategoriesAtributtes[]> {

		const categoriesItens = await DrinkCategoriesModel.findAll({
			where: {
				strCategory: {
					[Op.like]: `${name}`,
				},
			},
		});

		return categoriesItens;
	}
}