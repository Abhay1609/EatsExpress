import mongoose from "mongoose"
const itemSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,


    },
    image:{
        url:{
            type:String,
            required:true,
        }
    },
    price:{
        value:{
            type:String,
            required:true,
            
        },
        unit:{
            type:String,
            enum:["USD","IN"],
            default:"USD",
            required:true
        }
    },
    info:{
        description:{
            type:String,
            required:true,
        },
        addition:{
            type:String,
            
        }
    },
    inventory:{
        quantity:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            enum:['Juice','Slides','Burger'],
            required:true,

        }
    }
},{timestamp:true})
export const Item=mongoose.model("Item",itemSchema)