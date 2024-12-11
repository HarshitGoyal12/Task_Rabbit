const express=require("express")
const bodyparser=require("body-parser")
const mongoose = require("mongoose")
const dotenv=require("dotenv")
const{userRoutes,taskRoutes} =require("../")

const app=express()
app.use(express.json())

// mongoose.connect(process.env.MONGOOSE_URL).then(()=>console.log("User successfully connected to Mongoose")).catch(()=>"connection disconnected");

app.use("/user",userRoutes);
app.use("/book",taskRoutes);


const PORT=process.env.PORT ||3000

app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`);
})