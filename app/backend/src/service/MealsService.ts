import MealCategoriesModel from "../database/models/MealCategoriesModel";
import { mealCategoriesAtributtes } from "../database/models/MealCategoriesModel";
import MealsModel, { mealsAtributtes } from "../database/models/MealsModel";
import { Op } from 'sequelize';

export default class MealsService {
	public static async getAll(): Promise<mealsAtributtes[]> {
		const meals = await MealsModel.findAll();
		return meals;
	}

	public static async findByName(name: string | undefined): Promise<mealsAtributtes[] | undefined | {message: string}> {
		console.log(name, 'variavel');
		if (name !== undefined && name !== '') {
			const mealByName = await MealsModel.findAll({
				where: {
					strMeal: {
						[Op.like]: `%${name}%`,
					},
				},
			});
			if (mealByName.length === 0) {
				return ({ message: 'Invalid input, or no meal starts with that letter.'});
			}
	
			return mealByName;
		}
			const allMeals = await MealsModel.findAll();
			return allMeals;
		}

	public static async getAllCategories(): Promise<mealCategoriesAtributtes[]> {
		const mealsCategories = await MealCategoriesModel.findAll();
		return mealsCategories;		
	}

	public static async getMealsByCategory(name: string): Promise<mealsAtributtes[]> {
		
			const categoriesItens = await MealsModel.findAll({
				where: {
					strCategory: {
						[Op.like]: `${name}`,
					},
				},
			});

			return categoriesItens;
		}
	
}
