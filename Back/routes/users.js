const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User } = require("../Models");

router.get("/me", (req, res, next) => {
  if(req.user){
    return res.send(req.user);
  }
  res.sendStatus(401)
});

router.get("/", (req, res, next) => {
  User.findAll().then((users) => {
    res.send(users);
  });
});


//POST METHOD
router.post("/register", (req, res, next) => {
  const { firstName, lastName, phone, address, email, password } = req.body;
  User.create({ firstName, lastName, phone, address, email, password }).then(
    (user) => res.send(user)
    );
  });
  
  router.post("/login", passport.authenticate("local"), (req, res, next) => {
    res.send(req.user);
  });
  

module.exports = router;
