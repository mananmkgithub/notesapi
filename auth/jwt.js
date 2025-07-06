const jwt = require('jsonwebtoken');

const jwtmiddleware = (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) {
        return res.status(401).json({ 'message': 'token not found' })
    }
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return res.status(401).json({ error: "unauthorized" })
    }
    try {
        //verfiy token
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.user = decode
        next()
    }
    catch (er) {
        // token not verfiy
        console.log(er)
        res.status(401).json({ error: "Invaild Token" })
    }
}

const generatewebtoken = (userdata) => {
      return jwt.sign({userdata},process.env.JWT_KEY,{expiresIn:'30min'})
}

module.exports = { jwtmiddleware, generatewebtoken }