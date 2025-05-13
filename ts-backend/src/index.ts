import express,{Express} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import router from './routes/route'
import mongoose from 'mongoose'

const app:Express = express()
const PORT = 3000

dotenv.config()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const MONGO_URI = process.env.MONGO_URI

if(!MONGO_URI){
    console.error("MONGO_URI not in .env")
    process.exit(1)
}

mongoose.connect(MONGO_URI)
        .then(()=>{
            console.log("Connected to MongoDB")
        })
        .catch((err)=>{
            console.error("MongoDB connecetion failed",err)
        })

mongoose.connection.on('error',(err)=>{
    console.error("MongoDB runtime error",err)
})


app.use('/api/v1',router);

app.listen(PORT,()=>{
    console.log("Server Started at Port 3000")
})


