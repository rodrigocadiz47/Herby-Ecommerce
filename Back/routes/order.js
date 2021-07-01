const express = require("express");
const router = express.Router();
const { Order } = require("../Models");

router.get("/pending/:id", (req, res, next) => {
  const userId = req.params.id;
  Order.findAll({
    where: {
      userId: userId,
      bought: false,
    },
  })
    .then((orders) => res.send(orders))
    .catch((error) => res.status(404).send(error));
});

router.post("/:id", (req, res, next) => {
  const userId = req.params.id;
  const { name, amount, price, id, preTotal } =
    req.body;
  return Order.create({
    productName: name,
    productQuantity: amount,
    productPrice: price,
    productId: id,
    totalOrder: preTotal,
  })
    .then((order) => {
      order.setUser(userId).then(() => {
        Products.findByPk(id).then((product) => {
          res.send(product);
        });
      });
    })
    .catch((error) => res.status(400).send(error));
});

router.delete("/:id", (req, res, next) => {
  const orderId = req.params.id;
  Order.findByPk(orderId)
    .then((order) => order.destroy())
    .catch((error) => res.status(404).send(error));
});
module.exports = router;
