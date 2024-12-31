import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MongoDB URI is missing in environment variables.");
    }
    
    const connectInstance = await mongoose.connect(mongoUri);
    console.log(`\nMongoDB connected! DB HOST: ${connectInstance.connection.host}`);
  } catch (error) {
    console.log(`MONGODB connection failed: ${error}`);
    process.exit(1);
  }
};

export default connectDb;
