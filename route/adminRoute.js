const express = require('express')
const Route = express.Router()
const controller = require('../controller/adminController')



Route.get('/register' , controller.register)
Route.post('/registercreate' , controller.registerCreate)
Route.get('/login' , controller.login)
Route.post('/logincreate' , controller.loginCreate)
Route.get('/dashboard' ,controller.adminAuth, controller.dashboard)
Route.get('/logout' , controller.logout)




module.exports = Route