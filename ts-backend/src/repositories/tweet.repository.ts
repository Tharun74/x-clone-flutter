import tweetModel from "../db/models/tweet.model";
import { Itweet } from "../db/interfaces/tweet.interface";

export const getTweetRepo = async (tweetId: string): Promise<Itweet | null> => {
    try {
        const user = await tweetModel.findOne({tweetId}).lean();
        return user
    }
    catch (error) {
        console.error("Failed fetching tweet",error)
        return null
    }
}

export const createUserRepo = async (tweet:Itweet) : Promise<Boolean> => {
 try {
    const result = await tweetModel.create(tweet);
    if(result){
        return true
    }
    else{
        return false
    }
 } catch (error) {
    console.error("Failed to create tweet",error)
    return false
 }
}

export const updateUserRepo = async (updatedTweet:Partial<Itweet>,tweetId:string) : Promise<Boolean> => {
    try {
       const result = await tweetModel.findOneAndUpdate({tweetId},updatedTweet,{new:true});
       if(result){
           return true
       }
       else{
           return false
       }
    } catch (error) {
       console.error("Failed to update tweet",error)
       return false
    }
   }

export const deleteUserRepo = async (tweetId : string) : Promise<Boolean> => {
    try {
        const deleted = await tweetModel.findOneAndDelete({tweetId})
        if(deleted){
            return true
        }
        else{
            return false
        }
    } catch (error) {
        console.error("Failed to delete tweet",error)
        return false
    }
}