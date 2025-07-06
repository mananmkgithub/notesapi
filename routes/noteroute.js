const express=require('express')
const notesroutes=express.Router()
const notescontroller=require('../controller/notescontroller')
const { jwtmiddleware, generatewebtoken } = require('../auth/jwt')

notesroutes.get('/',notescontroller.getallnotes)
notesroutes.get('/usernotes',jwtmiddleware,notescontroller.getusernotes)
notesroutes.post('/Addnotes',jwtmiddleware,notescontroller.Postnotes)
notesroutes.get('/Findnotes/:notesname',jwtmiddleware,notescontroller.Findnotes)
notesroutes.put('/update/:id',jwtmiddleware,notescontroller.Updatenotes)
notesroutes.delete('/Deletenotes/:id',jwtmiddleware,notescontroller.Deletenotes)

module.exports=notesroutes
