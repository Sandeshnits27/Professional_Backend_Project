import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowecase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowecase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        lowecase:true,
        trim:true
    },
    avatar:{
        type:String, // clodnary url
        required:true
    },
    coverImage:{
        type:String,
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[
            true,'password is required'
        ]
    },
    refreshToken:{
        type:String 

    }
})


export const User= mongoose.model("User", userSchema);