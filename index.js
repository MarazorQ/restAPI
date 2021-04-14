import express from "express"
import mongoose from "mongoose"

const DB_URL = `mongodb+srv://user:user@cluster0.svz2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = 5000

const app = express()

app.get('/',(req,res)=>{
    console.log(req.query)
    res.status(200).json('GET RESPONSE')
})

async function startApp(){
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, ()=>{
            console.log("server is run")
        })
    }catch (e){
        console.log(e)
    }
}

