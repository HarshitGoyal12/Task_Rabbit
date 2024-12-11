const mongoose=require("mongoose")
const Schema=mongoose.Schema

module.exports=function(){
    title:{
        type:String
        required
    }
    author:{
        type:String,
        required
    }
    publisher:{
        type:String,
        required
    }

}

// exports default mongoose("user",userRoutes)