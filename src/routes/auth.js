import express from 'express';
import { 
  register, 
  login, 
  logout, 
  getMe, 
  updateProfile, 
  changePassword, 
  updateProfileImage 
} from '../controllers/authController.js';
import { upload } from '../utils/multer.js';
import { protect } from '../middleware/auth.js';
import { 
  registerValidation, 
  loginValidation, 
  updateProfileValidation 
} from '../utils/validation.js';

const router = express.Router();

router.post('/register', upload.single('profileImage'), registerValidation, register);
router.post('/login', loginValidation, login);


router.post('/logout', protect, logout);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfileValidation, updateProfile);
router.put('/change-password', protect, changePassword);
router.put('/profile-image', protect, updateProfileImage);

export default router;