import { Router } from "express";
import { additem,getItem,addCart ,getCart,deleteCart} from "../controller/item.controller.js";
import { addfaq,getfaq } from "../controller/faq.controller.js";
import { checkUser } from "../middleware/item.middleware.js";
const route=Router()
route.route('/add').post(additem)
route.route('/get').post(checkUser,getItem)
route.route('/addCart').post(checkUser,addCart)
route.route('/getCart').get(checkUser,getCart)
route.route('/deleteCart').post(checkUser,deleteCart)
route.route('/addfaq').post(addfaq)
route.route('/getfaq').get(getfaq);
export default route