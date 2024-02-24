import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { userModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async(req,res)=>{
    const {username, password }= req.body
    const user= await userModel.findOne({username});

    if(user){
        return res.json({message:"User already exists"})
    }
    const hashedPassword= await bcrypt.hash(password,10)

    const newUser = new userModel({username, password: hashedPassword})
    await newUser.save();

    return res.json({message:"User created"})

    
})


router.post("/login",async(req,res)=>{
    const {username,password}= req.body
    const user = await userModel.findOne( {username} );

    if(!user){
        return res.json({message:"No such user"})
    }

    const isPasswordValidv= await bcrypt.compare(password, user.password);
    if(!isPasswordValidv){
        return res.json({message: "Username or Password is Incorrect"})
    }

    const token =jwt.sign({id: user._id},"secret")
    res.json({token, userId: user._id });
})

export {router as userRouter}


