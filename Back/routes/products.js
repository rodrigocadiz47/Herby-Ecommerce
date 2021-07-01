const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Products } = require("../Models");

router.get("/", (req, res, next) => {
  Products.findAll().then((products) => res.send(products));
});

// path ("api/products/admin")
router.post("/admin", (req, res, next) => {
  const { name, category, price, stock, seasonal, description, image } =
    req.body;

  Products.findOrCreate({
    where: { name },
    defaults: { name, category, price, stock, seasonal, description, image },
  })
    .then((product) => sendStatus(201))
    .catch((error) => res.status(400).send(error));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Products.findByPk(id)
    .then((product) => {
      if (product.name) return res.send(product);
      res.sendStatus(404);
    })
    .catch((error) => res.status(404).send(error));
});

module.exports = router;
