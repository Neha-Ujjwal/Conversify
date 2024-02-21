import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
 text:{
    type:String,
    required:true
 },
 author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
 },
 community:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Community',
 },
 createdAt:{
    type:Date,
    default:Date.now
 },
 parentId:{ // this is for the commnet that we have on a thread  so each comment thread will have the id of its parent
    type:String
 }
});

const Thread=mongoose.models.Thread || mongoose.model("Thread",threadSchema);
export default Thread;


