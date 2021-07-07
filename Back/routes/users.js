const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User } = require("../Models");
const Sequelize = require("sequelize")

router.get("/admin/:id", (req, res, next) => {
  User.findAll({
    where:{
      [Sequelize.Op.not]:{
        id: req.params.id
      }
    }
  })
    .then((users) => {
      res.send(users);
    })
    .catch((error) => res.status(500).send(error));
});


//POST METHOD
router.post("/register", (req, res, next) => {
  const { firstName, lastName, phone, address, email, password /*,isAdmin*/ } =
    req.body;
  User.create({
    firstName,
    lastName,
    phone,
    address,
    email,
    password /*,isAdmin*/,
  })
    .then((user) => res.send(user))
    .catch((error) => res.status(400).send(error));
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.send({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  });
});

router.delete("/admin/:id", (req, res, next)=>{
  User.findByPk(req.params.id)
  .then(user=>{
    user.destroy()
    res.status(200).send(user)
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

router.put("/admin/:id", (req, res, next) => {
  User.findByPk(req.params.id).then((user) =>
    user
      .update({ isAdmin: !user.isAdmin })
      .then((user) => res.status(200).send(user))
      .catch(() => res.sendStatus(404))
  );
});

module.exports = router;
