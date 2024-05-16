import mongoose from 'mongoose';

const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log('connected to the database');
  } catch (error) {
    console.error('database connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
