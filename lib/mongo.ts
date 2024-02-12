import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    console.log("mongoose connect succefully");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
