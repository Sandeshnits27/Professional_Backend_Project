//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import mongoose from "mongoose";
import {DB_Sandipan} from "./constants.js"
import connectDB from './db/index.js'


dotenv.config({
    path:'./env'
})



connectDB()


























// const express = requier('express')
// const app = express ()

// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Sandipan}`)
//         app.on("error", (error)=>{
//             console.log("ERROR:: ",error)
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }catch(error){
//         console.log("an error occured here:",error )
//         throw err
//     }
// })()