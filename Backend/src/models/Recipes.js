import mongoose from "mongoose";

const RecipeSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ingredients:{
        type: String,
        required: true
    },
    instructions:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    cookingTime:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users", //refer to the model named 'users' in Users.js
        required: true
    },


})

export const recipeModel = mongoose.model("recipes",RecipeSchema)
