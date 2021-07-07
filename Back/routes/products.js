const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Products } = require("../Models");

//GET METHOD

router.get("/:category", (req, res, next) => {
  Products.findAll({
    where: { category: req.params.category },
    order: [["id", "ASC"]],
  }).then((products) => res.send(products));
});

router.get("/detail/:id", (req, res, next) => {
  const { id } = req.params;
  Products.findByPk(id)
    .then((product) => {
      if (product.name) return res.send(product);
      res.sendStatus(404);
    })
    .catch((error) => res.status(404).send(error));
});
// path ("api/products/admin")
//POST METHOD
router.post("/admin", (req, res, next) => {
  const { name, image, category, price, stock, seasonal, description } = req.body;

  Products.findOrCreate({
    where: { name },
    defaults: { name, category, price, stock, seasonal, description, image },
  })
    .then((product) => res.send(product))
    .catch((error) => res.status(400).send(error));
});

module.exports = router;
