import { Router } from 'express';
import MealsController from '../controller/MealsController';

const mealsRouter = Router();

mealsRouter.get('/',(req, res) => MealsController.getAll(req, res));
mealsRouter.get('/name',(req, res) => MealsController.findByName(req, res));

mealsRouter.get(
  '/categories',
  (req, res) => MealsController.getAllCategories(req, res),
);

mealsRouter.get(
  '/category',
  (req, res) => MealsController.getMealsByCategory(req, res),
);

// mealsRouter.get(
//   '/away',
//   (req, res) => LeaderBoardController.findAllAwayLeaderBoard(req, res),
// );

// mealsRouter.get(
//   '/',
//   (req, res) => LeaderBoardController.findAllGeneralLeaderBoard(req, res),
// );

export default mealsRouter;

