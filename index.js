import express from "express"
import mongoose from "mongoose"
import Post from "./model/Post.js"
import router from "./router/router.js"
import authRouter from "./router/authRouter.js"

const DB_URL = `mongodb+srv://user:user@cluster0.svz2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = 5000

const app = express()
// разрешаем доступ к серваку для клиента
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
app.use(allowCrossDomain);
app.use(express.json())
app.use('/api', router)
app.use('/auth', authRouter)


async function startApp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, ()=>{
            console.log(`server is run on ${PORT}`)
        })
    }catch (e){
        console.log(e)
    }
}

startApp()

