const express=require('express')
const app=express()

const dotenv=require('dotenv').config()
const Connect=require('./model/connection')
const authRoutes=require('./router/authRoutes')
app.use('/api/auth',authRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`connected to Port: ${process.env.PORT}`)
    Connect()
})
