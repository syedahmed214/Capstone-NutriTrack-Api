import Meal from '../models/Meal.js';

// Create Meal
export const createMeal = async (req, res) => {
  try {
    const userId = req.user.id; 
    const meal = await Meal.create({ ...req.body, userId });
    res.status(201).json({ success: true, message: 'Meal created', data: meal });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error creating meal', error: err.message });
  }
};

// Update Meal
export const updateMeal = async (req, res) => {
  try {
    const { id } = req.params;
    const meal = await Meal.findByIdAndUpdate(id, req.body, { new: true });
    if (!meal) return res.status(404).json({ success: false, message: 'Meal not found' });
    res.status(200).json({ success: true, message: 'Meal updated', data: meal });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error updating meal', error: err.message });
  }
};

// Delete Meal
export const deleteMeal = async (req, res) => {
  try {
    const { id } = req.params;
    const meal = await Meal.findByIdAndDelete(id);
    if (!meal) return res.status(404).json({ success: false, message: 'Meal not found' });
    res.status(200).json({ success: true, message: 'Meal deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error deleting meal', error: err.message });
  }
};

export const  getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find({ userId: req.user.id }).sort({ date: -1 });
    res.json({ success: true, data: meals });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching meals', error: err.message });
  }
};

export const getMealById = async (req, res) => {
  try {
    const meal = await Meal.findOne({ _id: req.params.id, user: req.user.id });
    if (!meal) return res.status(404).json({ success: false, message: 'Meal not found' });
    res.json({ success: true, data: meal });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching meal', error: err.message });
  }
};