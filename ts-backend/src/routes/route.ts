import { Router, Request, Response } from "express";
import userRouter from "./user.route";
import tweetRouter from "./tweet.route";

const router = Router();

router.get('/hello',(req:Request,res:Response)=>{
    res.json({
        'data' : 'server is live!!!!'
    })
})

router.use('/user',userRouter)
router.use('/tweet',tweetRouter)

export default router