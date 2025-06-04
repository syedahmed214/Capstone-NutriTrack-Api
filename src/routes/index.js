import express from 'express';
import authRoutes from './auth.js';
import mealRoutes from './meal.js';
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/meals', mealRoutes);

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    version: '1.0.0',
    endpoints: {
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login',
        logout: 'POST /api/auth/logout',
        profile: 'GET /api/auth/me',
        updateProfile: 'PUT /api/auth/profile',
        changePassword: 'PUT /api/auth/change-password',
        updateProfileImage: 'PUT /api/auth/profile-image'
      },
      meals: {
        createMeal: 'POST /api/meals',
        updateMeal: 'PUT /api/meals/:id',
        deleteMeal: 'DELETE /api/meals/:id',
        getAllMeals: 'GET /api/meals',
        getMealById: 'GET /api/meals/:id'
      }
    }
  });
});

export default router;