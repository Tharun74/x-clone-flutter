import userModel from "../db/models/user.model"
import { Iuser } from "../db/interfaces/user.interface"


export const getUserRepo = async (userId: string): Promise<Iuser | null> => {
    try {
        const user = await userModel.findOne({userId}).lean();
        return user
    }
    catch (error) {
        console.error("Failed fetching user",error)
        return null
    }
}

export const createUserRepo = async (user:Iuser) : Promise<Boolean> => {
 try {
    const result = await userModel.create(user);
    if(result){
        return true
    }
    else{
        return false
    }
 } catch (error) {
    console.error("Failed to create user",error)
    return false
 }
}

export const updateUserRepo = async (updatedUser:Partial<Iuser>,userId:string) : Promise<Boolean> => {
    try {
       const result = await userModel.findOneAndUpdate({userId},updatedUser,{new:true});
       if(result){
           return true
       }
       else{
           return false
       }
    } catch (error) {
       console.error("Failed to update user",error)
       return false
    }
   }

export const deleteUserRepo = async (userId : string) : Promise<Boolean> => {
    try {
        const deleted = await userModel.findOneAndDelete({userId})
        if(deleted){
            return true
        }
        else{
            return false
        }
    } catch (error) {
        console.error("Failed to delete user",error)
        return false
    }
}
 