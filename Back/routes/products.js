const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Products } = require("../Models");

//GET METHOD

router.get("/", (req, res, next) => {
  Products.findAll({ order: [["id", "ASC"]] }).then((products) => res.send(products));
});

router.get("/:category", (req, res, next) => {
  Products.findAll({
    where: { category: req.params.category, available: true },
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
  console.log("req.body", req.body);
  const { name, image, category, price, stock, seasonal, description } = req.body;
  Products.create({
    name: name,
    image: image,
    category: category,
    price: price,
    seasonal: seasonal,
    description: description,
  })
    .then((product) => res.send(product))
    .catch((error) => {
      console.log(error);
      return res.status(400).send(error);
    });
});
//   {
//   where: { name },
//   defaults: { name, category, price, stock, seasonal, description, image },
// }

router.put("/admin/:id", (req, res, next) => {
  console.log("EDIT PROD", req.body);
  const values = req.body;
  const options = { returning: true, where: { id: req.params.id } };
  Products.update(values, options).then(([cout, product]) => {
    res.send(product);
  });
});

module.exports = router;
