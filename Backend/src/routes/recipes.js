import { recipeModel } from "../models/Recipes.js";

import express from 'express'
import mongoose from "mongoose";

const router = express.Router();

router.get("/",async(req,res)=>{
    try{
        const data = await recipeModel.find({})
        res.json(data);

    }
    catch(err){
        res.json(err)
    }
})

router.post("/",async(req,res)=>{
    
    try{
        const recipe = new recipeModel(req.body);
        const data = await recipe.save();
        res.json(data)
    }
    catch(err){
        res.json(err);
    }
})

export {router as recipesRouter}