import mongoose from 'mongoose';
import {DB_Sandipan} from "../constants.js"

const connectDB= async ()=>{
    try{
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Sandipan}`)
       console.log(`\n Mongodb connected!! host:${connectionInstance}`)
    }catch(error){
        console.log("MONGOOSE connect error",error)
        process.exit(1)
    }
}
export default connectDB;