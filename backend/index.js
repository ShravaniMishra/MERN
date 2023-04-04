const express = require('express')
const cors = require('cors')
const {connection} = require('./config/db')
const {UserModel}=require('./models/Usermodel')

require('dotenv').config()
const app=express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.setHeader('Content-Type', 'text/html; charset=utf')
    res.send("Welcome to my Food App")
})

app.post('/signup',async(req,res)=>{
    const user = req.body
    const data = new UserModel(user)
    await data.save()
    res.send("Successfully signed up")
})
app.listen(process.env.Port, async()=>{
    try{
        await connection
        console.log("connected to database")
    }catch(err){
        console.log(err)
        res.send(`Something went wrong`)
    }
console.log(`Running at port - ${process.env.Port}`)
})