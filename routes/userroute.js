const express=require('express')
const useroutes=express.Router()
const usercontroller=require('../controller/usercontroller')

useroutes.get('/',usercontroller.getallusers)
useroutes.post('/Adduser',usercontroller.postuser)
useroutes.get('/Finduser',usercontroller.finduser)
useroutes.delete('/Deleteuser/:id',usercontroller.deleteuser)

module.exports=useroutes