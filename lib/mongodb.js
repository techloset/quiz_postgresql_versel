import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGU_URI);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
  