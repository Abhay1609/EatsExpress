import app from "./app.js";
import { dbConncetion } from "./dB/db.connection.js";
import dotenv from "dotenv"
  
dotenv.config(
   { path:'./.env'}
)
    

    


dbConncetion()
.then( ()=>{
   
    
        app.listen(process.env.PORT||8000,()=>{
        console.log("listening at port",process.env.PORT)})
   }
)
.catch((err)=>{
    console.log("connection failed",err)
})