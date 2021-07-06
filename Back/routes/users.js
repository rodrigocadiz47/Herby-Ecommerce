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
  res.send({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
  });
});

router.delete("/admin/:id", (req, res, next)=>{
  User.findByPk(req.params.id)
  .then(user=>{
    user.destroy()
    res.sendStatus(200)
  })
  .catch(()=>res.sendStatus(404))
})

router.post("/logout", (req, res, next) => {
  req.logOut();
  res.sendStatus(200);
});

router.delete("/admin/:id", (req, res, next) => {
  console.log("req.params", req);
  User.findByPk(req.params.id)
    .then((user) => {
      console.log("encontre el user");
      user.destroy();
      res.send(user);
    })
    .catch(() => res.sendStatus(404));
});

module.exports = router;
