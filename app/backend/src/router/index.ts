import { Router } from 'express';
import mealsRouter from './meals.router';
import drinksRouter from './drinks.router';

const router = Router();

router.use('/meals', mealsRouter);
router.use('/drinks', drinksRouter);
// router.use('/login', loginRouter);
// router.use('/matches', matchesRouter);
// router.use('/leaderboard', leaderBoardRouter);

export default router;
