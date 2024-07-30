import mongoose from "mongoose"

export const dbConncetion=async()=>{
    try{
        const connectionInstance=await mongoose.connect(process.env.MONGODB_URI+"/youtr")
        console.log("conncetion succesfull",connectionInstance.connection.host)

    }
    catch(err){
        console.log("error in connection ",err)
        process.exit(1)

    }


}