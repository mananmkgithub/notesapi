const mongoose = require('mongoose')
const User = require('../models/user')
const { jwtmiddleware, generatewebtoken } = require('../auth/jwt')
const bcrypt = require('bcrypt')
const Notes = require('../models/notes')

exports.register = async (req, res, next) => {
    try {
        const { username, password, email } = req.body
        const hashedpassword = await bcrypt.hash(password, 12)
        const user = new User({ username: username, password: hashedpassword, email: email })
        const usave = await user.save()
        console.log("User Is Registred")
        const payload = {
            id: usave._id,
            username: usave.username
        }
        const gtoken = generatewebtoken(payload)
        console.log('token is:', JSON.stringify(gtoken))
        return res.status(200).json({ response: usave, token: gtoken })
    }
    catch (er) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}
exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const finduser = await User.findOne({ username: username })
        if (!finduser) {
            return res.status(404).json({ error: 'Incorrect Username...' });
        }
        if (!await bcrypt.compare(password, password)) {
            const payload = {
                id: finduser._id,
                username: finduser.username
            }
            const gtoken = generatewebtoken(payload)
            return res.status(200).json({ 'token': gtoken })
        }
        return res.status(404).json({ error: 'Incorrect Password...' });
    }
    catch (er) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.deleteuser = async (req, res, next) => {
    try {
        const did = req.params.id
        const userid=req.user.userdata.id
        const findusernoteid=await User.findById({_id:userid})
        const data=await findusernoteid.populate('notes')
        for(let i in data.notes){
            let myid=data.notes[i]._id
            const ddata=await Notes.findByIdAndDelete({_id:myid})
            console.log('all data deleted')
        }
        const duser = await User.findByIdAndDelete({ _id: did })
        if (!duser) {
            return res.status(404).json({ error: 'User is Not Found..' });
        }
        console.log('user deleted');
        res.status(200).json({ 'message': "user Deleted...", "username": duser.username });
    }
    catch (er) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}


