const express=require('express')
const notesroutes=express.Router()
const notescontroller=require('../controller/notescontroller')

notesroutes.get('/',notescontroller.getallnotes)
notesroutes.post('/Addnotes',notescontroller.Postnotes)
notesroutes.get('/Findnotes/:notesname',notescontroller.Findnotes)
notesroutes.put('/update/:id',notescontroller.Updatenotes)
notesroutes.delete('/Deletenotes/:id',notescontroller.Deletenotes)

module.exports=notesroutes