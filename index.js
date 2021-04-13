import express from "express"

const PORT = 5000

const app = express()

app.get('/',(req,res)=>{
    res.status(200).json('servers')
})

app.listen(PORT, ()=>{
    console.log("server is run")
})