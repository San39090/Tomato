import mongoose from "mongoose"

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://San39090:6301204308@cluster0.dcnj2.mongodb.net/Tomato').then(()=>console.log('DB connected'));
}