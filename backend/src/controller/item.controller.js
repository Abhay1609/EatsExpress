
import { Item } from "../models/item.model.js"
import { UserItem } from "../models/user.model.js"
import { apiResponse } from "../utils/apiRespose.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { errorApi } from "../utils/errorHandle.js"
export const additem=asyncHandler(async(req,res)=>{
    const {title,url,value,unit,desc,add,quantity,category}=req.body

    const existingItem=Item.findOne({title:title});
   
    // if(existingItem){
    //     throw new errorApi(401,"already exist")
    // }
    const item=await Item.create({
        title,
        image:{url:url},
        price:{
            value:value,
            unit:unit,
        },
        info:{
            description:desc,
            addition:add,
        },
        inventory:{
            quantity:quantity,
            category:category
        }


    });
    if(!item){
        throw new errorApi(501,"Internal server error")
    }
    return res.status(201)
    .json(
        new apiResponse(
        201,
        "Item created",
        item)
    )
       
    

})
export const getItem=asyncHandler(async(req,res)=>{
 
    const user=await Item.find()
    //console.log(user)
    if(!user){
        throw new errorApi(500,"Empty")
    }
    console.log("new")
    const options={
        httpOnly:true,
        secure:true
    }
  
    return res.status(200)
    .cookie('uid',req.uid,options)
    .json(
        new apiResponse(
            200,
            'Success',
            user
        )
    )
})

export const addCart = asyncHandler(async (req, res) => {
    const { product_id, quantity } = req.body;

    const user = req.uid;
  
    // Find the user and check if the product already exists in the cart
    const userCart = await UserItem.findOne({ username: user });
  
    if (!userCart) {
      throw errorApi(400, "User not found");
    }
  
    const existingItemIndex = userCart.cart.findIndex(
      (item) => item.item.product.toString() === product_id
    );
  
    if (existingItemIndex > -1) {
      // If product exists in the cart, update the quantity
      userCart.cart[existingItemIndex].item.quantity = quantity;
    } else {
      // If product does not exist, add it to the cart
      const newItem = { item: { product: product_id, quantity: quantity } };
      userCart.cart.push(newItem);
    }
  
    const updatedUserCart = await userCart.save();
    const updatedetail=await updatedUserCart.populate('cart.item.product')
    if (!updatedUserCart) {
      throw errorApi(400, "Cart not updated");
    }
  
    const options = {
      httpOnly: true,
      secure: true
    };
  
    return res.status(200)
      .cookie('uid', user, options)
      .json(
        new apiResponse(
          200,
          'Success',
          updatedetail
        )
      );
  });

export const getCart=asyncHandler(async(req,res)=>{
    const user_id=req.uid;
    const userData=await UserItem.findOne({username:user_id}).populate('cart.item.product');
    if(!userData){
        throw new errorApi(401,"user not found")
    }
    return res.status(200)
    .json(
        new apiResponse(
            200,
            'Cart data',
            userData
        )
    )

})
export const deleteCart = asyncHandler(async (req, res) => {
    const { product_id } = req.body;
    const uid = req.uid;

    // Find the user by their UID
    const user = await UserItem.findOne({ username: uid });

    if (!user) {
        throw new errorApi(400, "User not found");
    }
    // console.log(product_id,user.cart)
    // Find the index of the product in the user's cart
    const existingIndex = user.cart.findIndex((item) => item.item.product.toString() === product_id);

    if (existingIndex > -1) {
        // If the product exists in the cart, remove it
        user.cart.splice(existingIndex, 1);
    } else {
        return res.status(404).json(
            new apiResponse(
                404,
                "Product not found in cart"
            )
        );
    }

    // Save the updated user cart
    const updateCart = await user.save();

    if (!updateCart) {
        throw new errorApi(500, "Error updating cart");
    }
    const updatedetail=await updateCart.populate('cart.item.product');
    console.log(updatedetail)
    return res.status(200).json(
        new apiResponse(
            200,
            "Product removed successfully",
            updatedetail
        )
    );
});

