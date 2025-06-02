import express from 'express';
import { createMeal, updateMeal, deleteMeal , getAllMeals ,getMealById } from '../controllers/mealController.js';
import { mealValidation } from '../utils/validation.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, mealValidation, createMeal);
router.put('/:id', protect, mealValidation, updateMeal);
router.delete('/:id', protect, deleteMeal);
router.get('/', getAllMeals);
router.get('/:id', getMealById);

export default router;
