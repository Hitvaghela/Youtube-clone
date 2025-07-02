import mongoose from "mongoose";
import {db_name} from "../constant.js";


const connectdb=async ()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.DATABASE_URL}/${db_name}`);
        console.log(`\n mongoDB connected !! DB HOST ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.error("Mongodb connection error :",error);
        process.exit(1);
    }
}

export default connectdb;