import mongoose from 'mongoose';
import { config } from 'dotenv';

// Load environment variables
config();
const mongoURL = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
