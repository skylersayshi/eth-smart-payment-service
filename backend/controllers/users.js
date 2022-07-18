import User from "../models/users.js";
import express from "express";
import mongoose from "mongoose";
const router = express.Router();

export const getUsers = async (req, res) =>{
    try{
        const users = await User.find();
        console.log(users);

        res.status(200).json(users);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createUser = async (req, res) =>{
    const user = req.body;
    const newUser = new User({...user, createdAt: new Date().toISOString()});

    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error){
        res.status(409).json({message: error.message});
    }
}

// export const updateUser = async (req, res) =>{
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedUser = { creator, title, message, tags, selectedFile, _id: id };

//     await User.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

// export const deleteUser = async (req, res) =>{
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await PostMessage.findByIdAndRemove(id);

//     res.json({message: 'This post has been successfully deleted'})
// }

// export const likePost = async (req,res) =>{
//     const {id} = req.params;
//     if(!req.userId){ return res.json({message: 'Not authenticated'})};
//     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const post = await PostMessage.findById(id);

//     const index = post.likes.findIndex((id) => id === String(req.userId));

//     if(index === -1){
//         post.likes.push(req.userId);
//     } else{
//         post.likes = post.likes.filter((id)=> id !== String(req.userId));
//     }

//     const updatePost = await PostMessage.findByIdAndUpdate(id, post, {new: true})
//     res.json(updatePost);
// }

export default router;