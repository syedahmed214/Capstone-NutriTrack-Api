import mongoose from 'mongoose';
import { config } from './index.js';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`📦 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
};