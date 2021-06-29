const express = require("express")
const router = express.Router()
const passport = require("passport")
const {User} = require("../Models")

router.get("/", (req, res, next)=>{
    User.findAll()
    .then((users)=>{
        res.send(users)
    })
})

//POST METHOD
router.post("/", (req, res, next)=>{
    User.create(req.body)
    .then(user=> res.send(user))
})

router.post("/login", passport.authenticate("local"), (req, res, next)=>{
    res.send(req.user)
})

module.exports= router