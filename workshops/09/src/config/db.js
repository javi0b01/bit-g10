import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URI);
    console.log('MongoDB Atlas connected successfully');
  } catch (error) {
    console.log('MongoDB Atlas connection failed | Error:', error);
  }
};

export default connectDB;
