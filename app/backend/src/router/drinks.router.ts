import { Router } from 'express';
import DrinksController from '../controller/DrinksController';

const drinksRouter = Router();

drinksRouter.get(
  '/',
  (req, res) => DrinksController.getAll(req, res),
);

drinksRouter.get(
  '/name',
  (req, res) => DrinksController.findByName(req, res),
);

drinksRouter.get(
  '/categories',
  (req, res) => DrinksController.getAllCategories(req, res),
);

drinksRouter.get(
  '/category',
  (req, res) => DrinksController.getDrinksByCategory(req, res),
);

// drinksRouter.get(
//   '/away',
//   (req, res) => LeaderBoardController.findAllAwayLeaderBoard(req, res),
// );

// drinksRouter.get(
//   '/',
//   (req, res) => LeaderBoardController.findAllGeneralLeaderBoard(req, res),
// );

export default drinksRouter;
