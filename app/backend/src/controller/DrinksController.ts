import { Request, Response } from 'express';
import DrinksService from '../service/DrinksService';

export default class DrinksController {
  public static async getAll(req: Request, res: Response) {
		const allDrinks = await DrinksService.getAll();
		res.status(200).json({drinks: allDrinks});
	}
	
	public static async getAllCategories(req: Request, res: Response) {
		const allDrinks = await DrinksService.getAllCategories();
		res.status(200).json({drinks: allDrinks});
	}  

	public static async getDrinksByCategory(req: Request, res: Response) {
		const { q } = req.query;

		if (!q) {
			const allMeals = await DrinksService.getAll();
			return res.status(200).json({meals: allMeals});
		}

		const categoryByName = await DrinksService.getDrinksByCategory(q.toString());
		res.status(200).json({meals: categoryByName});
	}

	public static async findByName(req: Request, res: Response) {
		const { q } = req.query;

		if (!q) {
			const allDrinks = await DrinksService.findByName(q);
			return res.status(200).json({drinks: allDrinks});
		} 
			const drinkByLetter = await DrinksService.findByName(q.toString());
			return res.status(200).json({drinks: drinkByLetter});
		
	}
}