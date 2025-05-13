import mongoose,{Schema} from "mongoose";
import { Itweet } from "../interfaces/tweet.interface";

const tweetSchema = new Schema<Itweet>({
    tweetId : { type : String, required: true},
    content : { type : String, required: true},
    adminId : { type : String, required: true},
    createdAt : { type : String, required: true}
})

const tweetModel = mongoose.model("TweetModel",tweetSchema)

export default tweetModel