const express=require('express')
const useroutes=express.Router()
const usercontroller=require('../controller/usercontroller')
const { jwtmiddleware, generatewebtoken } = require('../auth/jwt')

useroutes.get('/',usercontroller.getallusers)
useroutes.post('/Adduser',usercontroller.postuser)
useroutes.get('/Finduser/:username',usercontroller.finduser)
useroutes.delete('/Deleteuser/:id',usercontroller.deleteuser)

module.exports=useroutes