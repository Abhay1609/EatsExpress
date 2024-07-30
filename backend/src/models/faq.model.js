import mongoose from "mongoose"
const faqSchema=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true

    },
    type:{
        type:String,
        required:true,
        enum:['food','delivery','company']
    }
},{timestamp:true})

export const FAQ=mongoose.model("FAQ",faqSchema)