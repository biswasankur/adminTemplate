const express=require('express')
const route=express.Router()
const controller=require('../controller/userController')

route.get('/',controller.home)


module.exports=route