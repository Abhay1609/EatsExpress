import { asyncHandler } from "../utils/asyncHandler.js"
import { errorApi } from "../utils/errorHandle.js"
import { UserItem } from "../models/user.model.js"

export const checkUser=asyncHandler(async(req,res,next)=>{
    try{
    const str='xxxxxxxxxx'.replace(/x/g, function() {
        const r = Math.random() * 16 | 0;
        return r.toString(16);
    });
    const uid=req.cookies?.uid;
    console.log(uid,'inital cookie',req.cookies,req)
    
    if(!uid){
   
        // throw new errorApi(401,error?.message||'unauthorize request')

        const user=await UserItem.create({
            username:str,
            cart:[]


        })
     if(!user){
            throw new errorApi(401,"sometingh in user")
        }
    
        req.uid=str
      
     
        next()

    }else{
    req.uid=uid;
    next()}}
    catch(error){
        throw new errorApi(401,error?.message||'unauthorize request')
    }

})