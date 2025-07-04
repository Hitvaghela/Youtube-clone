import express,{Schema} from "express";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema({
    videoFile:{
        type:String, //cloudnarry url
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true,

    },
    descriptoin:{
        type:String,
        required:true,
    },
    duration:{
        type:Number, //Cloudnarry
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        typee:Boolean,
        required:true,
        default:false
    }



},{timestamps:true})


videoSchema.plugin(mongooseAggregatePaginate);
export const video=mongoose.model("Video",videoSchema);