import { FAQ } from "../models/faq.model.js";
import { apiResponse } from "../utils/apiRespose.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorApi } from "../utils/errorHandle.js";

export const addfaq=asyncHandler( async(req,res)=>{
    const {question,answer,type}=req.body;
    const faq=await FAQ.create({
        question:question,
        answer:answer,
        type:type
    })
    if(!faq){
        throw new errorApi(400,"faq required")
    }
    return res.status(200)
    .json(
        new apiResponse(
            200,
            "faq created",
            faq

        )
    )

})
export const getfaq=asyncHandler( asyncHandler(async(req,res)=>{
    const faq=await FAQ.find()
    return res.status(200)
    .json(
        new apiResponse(
            200,
            "faq",
            faq
        )
    )
}))
