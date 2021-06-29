const express = require("express")
const helmet = require("helmet")
const passport = require("passport")
const coockieParser = require("cookie-parser")
const session = require("express-session")

const app = express()

app.use(helmet())

app.use(express.json())
app.use(express.urlencoded( { extended: true } ))

app.use(coockieParser())

app.use(session( { secret:"herby", resave: true, saveUninitialized:true } ))

app.use(passport.initialize())
app.use(passport.session())

const LocalStrategy = require("passport-local").Strategy
const {User} = require("./Models")

passport.use(
    new LocalStrategy({ usernameField: "email", passwordField: "password" }, 
        function(email, password, done) {
            User.findOne({ email })
            .then(user=>{
                if(!user){
                    return done(null, false)
                }
                user.isValidPassword(password, user.salt).then(hash=>{
                    if(hash !== user.password){
                        return done(null, false)
                    }
                    done(null, user)
                })
            })
            .catch(done)
        }
    )
)

passport.serializeUser(function(user, done){
    done(null, user.id)
})

passport.deserializeUser(function(id, done){
    User.findByPk(id)
    .then(user=>{
        done(null, user)
    })
})

app.listen(3001, ()=>{
    console.log("server on port 3001")
})