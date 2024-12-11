//registration
const user=require("../models/userModels.js")
const bcrypt=require("bcrypt");
import jwt from ' jsonwebtoken'

exports.signUp=async(res,req)=>{
    try{
    const {name,email,password}=req.body
    
    const salt=bcrypt.hash(10)
    const hashedPassword=bcrypt.hash(salt,password)

    const user=new user({name,email,hashedPassword:password})
    res.status(200).json({User:"user created successfully"});

    }
    catch(err){
        res.status(500).json(message.err);
    }

}

exports.login= async (req, res) => {
    const user = await user.findOne({ username: req.body.username });
 //authentication
    try{
        const match = await bcrypt.compare(req.body.password, user.password);
        const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
        if(match){
            res.json({ accessToken: accessToken });
        } else {
            res.json({ message: "Invalid Credentials" });
        }
    } catch(e) {
        console.log(e)
    }
}


