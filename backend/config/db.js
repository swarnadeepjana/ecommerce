import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config({ path: '/.env' });
dotenv.config();

const connectDB = async () => {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URI); // Debugging
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected on host: ${connection.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
