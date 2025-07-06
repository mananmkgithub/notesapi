const mongoose = require('mongoose');


const notesSchema=new mongoose.Schema({
     notesname:{
          type:String,
          required:[true,"notes name is required"]
     },
     notesdescription:{
          type:String,
          required:[true,"Notes desscription is required"]
     },
})

module.exports=mongoose.model('Notes',notesSchema)