const mongoose = require('mongoose')
const Notes = require('../models/notes')
const User = require('../models/user');


//get all notes 
exports.getallnotes = async (req, res, next) => {
    try {
        const allnotes = await Notes.find()
        console.log("All Data Is fetched")
        return res.status(200).json(allnotes)
    } catch (er) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

//add notes
exports.Postnotes = async (req, res, next) => {
    try {
        const { notesname, notesdescription } = req.body
        const note = new Notes({ notesname: notesname, notesdescription: notesdescription })
        console.log(req.user)
        const result = await note.save()
        console.log("Data Is Saved")
        return res.status(200).json(result)
    } catch (er) {
        console.log(er)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

//Find notes in database
exports.Findnotes = async(req, res, next) => {
   try{
        const findnotes=req.params.notesname
        const fdata=await Notes.findOne({notesname:findnotes})
        if (!fdata) {
            return res.status(404).json({ error: 'notes are not found' });
        }
        console.log("note is find...")
        res.status(200).json(fdata);
   }
   catch(er){
        return res.status(500).json({ error: 'Internal Server Error' })
   }
}
//update notes
exports.Updatenotes = async (req, res, next) => {
    try {
        const noteid = req.params.id
        const alldata = req.body
        const data = await Notes.findByIdAndUpdate({ _id: noteid }, alldata, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
        })
        if (!data) {
            return res.status(404).json({ error: 'notes are not found' });
        }
        console.log('data updated');
        res.status(200).json(data);
    }
    catch (er) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}
//delete notes
exports.Deletenotes = async (req, res, next) => {
    try {
        const did = req.params.id
        const deletenotes = await Notes.findByIdAndDelete({ _id: did })
        if (!deletenotes) {
            return res.status(404).json({ error: 'notes are not deleted' });
        }
        console.log('data deleted');
        res.status(200).json({'message':"Your Note is Deleted..."});
    }
    catch (er) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

