import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'], required: true },
  ingredients: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: String, default: '0g' },
  carbs: { type: String, default: '0g' },
  fats: { type: String, default: '0g' },
  notes: { type: String },
  date: { type: Date, required: true }
}, { timestamps: true });

const Meal = mongoose.model('Meal', mealSchema);
export default Meal;
