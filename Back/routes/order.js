const express = require("express");
const router = express.Router();
const { Order } = require("../Models");

router.post("/:id", (req, res, next) => {
  const userId = req.params.id;
  const { productName, productQuantity, productPrice, productId, totalOrder } =
    req.body;
  return Order.create({
    productName,
    productQuantity,
    productPrice,
    productId,
    totalOrder,
  })
    .then((order) => {
      console.log(order);
      order.setUser(userId).then((order) => res.send(order));
    })
});

router.delete("/:id", (req, res, next) => {
  const orderId = req.params.id;
  Order.findByPk(orderId).then((order) => order.destroy());
});
module.exports = router;
