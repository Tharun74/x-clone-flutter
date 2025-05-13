import { Router } from "express";
import { getUserController, deleteUserController, createUserController, updateUserController } from "../controllers/user.controller";
const userRouter = Router();

userRouter.get('/:userid',getUserController);
userRouter.post('/',createUserController);
userRouter.delete('/:userid',deleteUserController);
userRouter.put('/:userid',updateUserController);

export default userRouter;