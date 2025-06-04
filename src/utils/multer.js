import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadPath = path.join('src', 'uploads', 'profiles');
fs.mkdirSync(uploadPath, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, filename);
  }
});

const fileFilter = (req, file, cb) => {
  if (/image\/(jpeg|png|webp)/.test(file.mimetype)) cb(null, true);
  else cb(new Error('Only image files are allowed!'), false);
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } 
});
