import { Request,Response } from "express";
import tweetModel from "../db/models/tweet.model";

export const getTweetController = async(req:Request,res:Response) : Promise<void> => {
    try {
        const {tweetId} = req.params
        const tweet = await tweetModel.findOne({tweetId}).lean()
        if(tweet){
            res.status(200).json({tweet})
        }
        else{
            res.status(404).json({message : 'tweet not found'});
        }
    } catch (error) {
        console.error("Failed to fetch the tweet",error);
        res.status(500).json({error : 'Internal server error'})
    }
}

export const deleteTweetController = async(req:Request,res:Response) : Promise<void> => {
    try {
        const {tweetId} = req.params
        const result = await tweetModel.findOneAndDelete({tweetId})
        if(result){
            res.status(200).json({success: true, message : 'tweet deleted'})
        }
        else{
            res.status(404).json({success: false,message : 'tweet not found'});
        }
    } catch (error) {
        console.error("Failed to delete the tweet",error);
        res.status(500).json({error : 'Internal server error'})
    }
}

export const createTweetController = async(req:Request,res:Response) : Promise<void> => {
    try {
        const tweet = req.body
        const result = await tweetModel.create(tweet)
        if(result){
            res.status(201).json({success: true,data:result})
        }
        else{
            res.status(404).json({success: false,message : 'Failed to create tweet'});
        }
    } catch (error) {
        console.error("Failed to create the tweet",error);
        res.status(500).json({error : 'Internal server error'})
    }
}

export const updateTweetController = async(req:Request,res:Response) : Promise<void> => {
    try {
        const updatedTweet = req.body
        const {tweetId} = req.params
        const result = await tweetModel.findOneAndUpdate({tweetId},updatedTweet,{new:true})
        if(result){
            res.status(200).json({success: true,data:result})
        }
        else{
            res.status(404).json({success: false,message : 'Failed to update tweet'});
        }
    } catch (error) {
        console.error("Failed to update the tweet",error);
        res.status(500).json({error : 'Internal server error'})
    }
}