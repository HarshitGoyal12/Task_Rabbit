const mongoose=require("mongoose")
const Schema=mongoose.Schema

module.exports=function(){
    name:{
        type:String
        required
    }
    email:{
        type:String,
        required
    }
    password:{
        type:String,
        required
    }
}

// exports default mongoose("user",userRoutes)