import { Request, Response } from 'express';
import MealsService from '../service/MealsService';

export default class MealsController {
  public static async getAll(_req: Request, res: Response) {
		const allMeals = await MealsService.getAll();
		res.status(200).json({meals: allMeals});
	}
	
	public static async getAllCategories(req: Request, res: Response) {
		const allMeals = await MealsService.getAllCategories();
		res.status(200).json({meals: allMeals});
	}

	public static async getMealsByCategory(req: Request, res: Response) {
		const { q } = req.query;

		if (!q) {
			const allMeals = await MealsService.getAll();
			return res.status(200).json({meals: allMeals});
		}

		const categoryByName = await MealsService.getMealsByCategory(q.toString());
		res.status(200).json({meals: categoryByName});
	}  


	public static async findByName(req: Request, res: Response) {
		const { q } = req.query;

		if (!q) {
			const allMeals = await MealsService.findByName(undefined);
			return res.status(200).json({meals: allMeals});
		}
			const mealByLetter = await MealsService.findByName(q.toString());
			return res.status(200).json({meals: mealByLetter});
		
	}
	
} 
