const express=require("express")
const{login,signUp}=require("../controllers/userControllers.js")
const router=express.Router();

router.post('/login',login)
router.post('/signup',signUp)