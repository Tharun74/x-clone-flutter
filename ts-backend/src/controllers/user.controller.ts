import { Request,Response } from "express";
import userModel from "../db/models/user.model";

export const getUserController = async(req:Request,res:Response) : Promise<void> => {
    try {
        const {userId} = req.params
        const user = await userModel.findOne({userId}).lean()
        if(user){
            res.status(200).json({user})
        }
        else{
            res.status(404).json({message : 'user not found'});
        }
    } catch (error) {
        console.error("Failed to fetch the user",error);
        res.status(500).json({error : 'Internal server error'})
    }
}

export const deleteUserController = async(req:Request,res:Response) : Promise<void> => {
    try {
        const {userId} = req.params
        const result = await userModel.findOneAndDelete({userId})
        if(result){
            res.status(200).json({success: true, message : 'user deleted'})
        }
        else{
            res.status(404).json({success: false,message : 'user not found'});
        }
    } catch (error) {
        console.error("Failed to delete the user",error);
        res.status(500).json({error : 'Internal server error'})
    }
}

export const createUserController = async(req:Request,res:Response) : Promise<void> => {
    try {
        const user = req.body
        const result = await userModel.create(user)
        if(result){
            res.status(201).json({success: true,data:result})
        }
        else{
            res.status(404).json({success: false,message : 'Failed to create user'});
        }
    } catch (error) {
        console.error("Failed to create the user",error);
        res.status(500).json({error : 'Internal server error'})
    }
}

export const updateUserController = async(req:Request,res:Response) : Promise<void> => {
    try {
        const updatedUser = req.body
        const {userId} = req.params
        const result = await userModel.findOneAndUpdate({userId},updatedUser,{new:true})
        if(result){
            res.status(200).json({success: true,data:result})
        }
        else{
            res.status(404).json({success: false,message : 'Failed to update user'});
        }
    } catch (error) {
        console.error("Failed to update the user",error);
        res.status(500).json({error : 'Internal server error'})
    }
}