import mongoose,{Schema} from "mongoose";
import { Iuser } from "../interfaces/user.interface";

const userSchema = new Schema<Iuser>({
    userId : { type : String, required: true},
    email : { type : String, required: true},
    firstName : { type : String, required: true},
    lastName : { type : String, default: ''},
    tweet : { type : [String], default: []},
    createdAt : { type : String, required: true}
})

const userModel = mongoose.model('UserModel',userSchema);

export default userModel