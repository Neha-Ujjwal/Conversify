import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async()=>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL){
        return console.log("MONGODB_URL NOT FOUND")
    }
}