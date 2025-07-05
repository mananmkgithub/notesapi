const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const notesroutes=require('./routes/noteroute')
const useroutes=require('./routes/userroute')
const app = express()
const PORT = process.env.PORT || 4000
const M_URL = process.env.MONGO_URL
app.use(express.json())

app.use('/notes',notesroutes)
app.use('/users',useroutes)

app.use((req, res, next) => {
    res.status(404).json({ "error": "404 Page Not Found" })
})
mongoose.connect(M_URL).then(() => {
    console.log("Mongodb is connect")
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    })
}).catch((er) => {
    console.log("Monogodb is not connect", er)
})

