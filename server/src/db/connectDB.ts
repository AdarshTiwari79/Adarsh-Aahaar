// mongoPass = 2zcqg9TqXOjaz9fF
// jaunpuradarsh62

import mongoose from "mongoose";

const connectDB = async () =>{
  
  try{
    await mongoose.connect(process.env.MONGO_URI !);
    console.log("mongoDB connected.")
  } catch(error) {
    console.log(error);
  }
}

export default connectDB;