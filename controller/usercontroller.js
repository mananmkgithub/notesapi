const mongoose = require('mongoose')
const User = require('../models/user')
const { jwtmiddleware, generatewebtoken } = require('../auth/jwt')
const bcrypt = require('bcrypt')


exports.getallusers = async (req, res, next) => {
    try {
        const alluser = await User.find()
        console.log("All Users Is fetched")
        return res.status(200).json(alluser)
    }
    catch (er) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

exports.postuser = async (req, res, next) => {
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

exports.deleteuser = async (req, res, next) => {
    try {
        const did = req.params.id
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

exports.finduser = async (req, res, next) => {
    try {
        const fusername = req.params.username
        const f = await User.findOne({ username: fusername })
        if (!f) {
            return res.status(404).json({ error: 'User is Not Found..' });
        }
        console.log('user is find');
        res.status(200).json(f);
    }
    catch (er) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}