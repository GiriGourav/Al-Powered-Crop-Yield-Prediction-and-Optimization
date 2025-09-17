const express=require('express')
const Routes=express.Router()

const {login,signup}=require('../controller/auth')

Routes.post('/login',login)
Routes.post('/signup',signup)
module.exports=Routes