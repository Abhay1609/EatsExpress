import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
app.use(cors({
    origin:process.env.COR_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({limit:'16kb'}))
app.use(express.static("public"))
app.use(cookieParser())

import route from "./router/item.route.js"
app.use('/api/item',route)

export default app