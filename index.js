import express from "express"
import mongoose from "mongoose"
import Post from "./Post.js"

const DB_URL = `mongodb+srv://user:user@cluster0.svz2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = 5000

const app = express()
app.use(express.json())

app.post('/', async (req,res)=>{
    try{
        const {title, content, author} = req.body// дисттруктуризация
        const post = await Post.create({title, content, author})
        res.json(post)
    }catch (e){
        res.status(500).json(e)
    }
})

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

