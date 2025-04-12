import mongoose ,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";// 
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const videoSchema = new Schema({
videoFile:{
    type:String,
    required:true
},
thumbnail:{
    type:String,
    required:true
},
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
views:{
    type:Number,
    required:true
},
duration:{
    type:Number, //cloude nary
    required:true
},
isPublished:{
    type:Boolean,
},
owner:{

    type:Schema.Types.ObjectId,
    ref:"User"
}

},{timestamps:true})

videoSchema
export const Video = mongoose.model("Video", videoSchema);