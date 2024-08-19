import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodroute.js"
import userRouter from "./routes/userrouter.js"
import 'dotenv/config'
import cartRouter from "./routes/cartroute.js"
import orderRouter from "./routes/orderroute.js"


//app config
const app = express()
const port = process.env.PORT || 4000;

//middleware
app.use(express.json()) //requests are parsed
app.use(cors()) //access backend from any frontend

//DB connection
connectDB();

//api end points
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads')) //helps us to see the images by copying the link to browser
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})


//mongodb+srv://San39090:6301204308@cluster0.dcnj2.mongodb.net/?