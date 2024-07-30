import mongoose from "mongoose"
import { Item } from "./item.model.js"

const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    cart:[
       {
        item:{
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:Item,

            },
            quantity:{
                type:String,
                
            }
        }
            
        },
    ]


    

})
export const UserItem=mongoose.model("UserItem",userSchema)