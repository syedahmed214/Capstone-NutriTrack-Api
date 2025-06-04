import { body } from 'express-validator';

export const registerValidation = [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name is required')
    .isLength({ min: 2, max: 30 })
    .withMessage('First name must be between 2 and 30 characters'),
  
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name is required')
    .isLength({ min: 2, max: 30 })
    .withMessage('Last name must be between 2 and 30 characters'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email'),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  
  body('phone')
    .optional()
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please enter a valid phone number'),
  
  body('bio')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Bio cannot exceed 500 characters'),
  
  body('position')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Position cannot exceed 100 characters')
];

export const loginValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email'),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

export const updateProfileValidation = [
  body('firstName')
    .optional()
    .trim()
    .isLength({ min: 2, max: 30 })
    .withMessage('First name must be between 2 and 30 characters'),
  
  body('lastName')
    .optional()
    .trim()
    .isLength({ min: 2, max: 30 })
    .withMessage('Last name must be between 2 and 30 characters'),
  
  body('phone')
    .optional()
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please enter a valid phone number'),
  
  body('bio')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Bio cannot exceed 500 characters'),
  
  body('position')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Position cannot exceed 100 characters'),
];
export const mealValidation = [
  body('name').notEmpty().withMessage('Meal name is required'),
  body('type').isIn(['Breakfast', 'Lunch', 'Dinner', 'Snack']).withMessage('Invalid meal type'),
  body('ingredients').notEmpty().withMessage('Ingredients are required'),
  body('calories').isNumeric().withMessage('Calories must be a number'),
  body('date').isISO8601().withMessage('Valid date is required')
];