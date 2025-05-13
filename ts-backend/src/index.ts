import express,{Express} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/route'

const app:Express = express()
const PORT = 3000
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/v1',router);

app.listen(PORT,()=>{
    console.log("Server Started at Port 3000")
})


