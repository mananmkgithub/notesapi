const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const bcrypt=require('bcrypt')

passport.use(new LocalStrategy(async (username, password, done) => {
    //aunthication logic
    try {
        const user = await User.findOne({ username: username })
        if (!user) {
            return done(null, false, { message: "Incorret username" })
        }
        const isMatchPassword=bcrypt.compare(password,user.password)
        if(!isMatchPassword){
            return done(null, false, { message: "Incorret password" })
        }
        else{
             return done(null, user)
        }
    }
    catch (er) {
        return done(er)
    }
}))

module.exports=passport