const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User } = require("../Models");

router.get("/", (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((error) => res.status(500).send(error));
});

// router.get("/me", (req, res, next) => {
//   if (!req.user.firstName) {
//     return res.sendStatus(401);
//   }
//   res.send(req.user);
// });

//POST METHOD
router.post("/register", (req, res, next) => {
  const { firstName, lastName, phone, address, email, password } = req.body;
  User.create({ firstName, lastName, phone, address, email, password })
    .then((user) => res.send(user))
    .catch((error) => res.status(400).send(error));
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.send(req.user);
});

router.post("/logout", (req, res, next) => {
  req.logOut();
  res.sendStatus(200);
});

module.exports = router;
