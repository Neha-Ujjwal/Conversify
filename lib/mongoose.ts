import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); //When the strict option is set to true, Mongoose will ensure that only the fields that are specified in your schema will be saved in the database, and all other fields will not be saved (if some other fields are sent).
  if (!process.env.MONGODB_URL) {
    return console.log("MONGODB_URL not found");
  }

  if (isConnected) return console.log("Already connected to mongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
