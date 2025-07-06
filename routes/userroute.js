const express=require('express')
const useroutes=express.Router()
const usercontroller=require('../controller/usercontroller')
const { jwtmiddleware, generatewebtoken } = require('../auth/jwt')


useroutes.post('/Adduser',usercontroller.register)
useroutes.delete('/Deleteuser/:id',jwtmiddleware,usercontroller.deleteuser)
useroutes.post('/login',usercontroller.login)

module.exports=useroutes