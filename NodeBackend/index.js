const express=require('express')
const app=express()

const dotenv=require('dotenv')
dotenv.config()
const Connect=require('./model/connection')

const cors=require('cors')
const cookieParser=require('cookie-parser')
app.use(express.json())
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true ,//ORIGIN ALL
    credentials:true
}))


const authRoutes=require('./router/authRoutes')
app.use('/api/auth',authRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`connected to Port: ${process.env.PORT}`)
    Connect()
})
