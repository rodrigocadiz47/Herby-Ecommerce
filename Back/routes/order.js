const express = require("express");
const router = express.Router();
const { Order, User, Products } = require("../Models");

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
  console.log(req.body)
  const userId = req.params.id;
  const { amount, id, preTotal } = req.body;
  User.findByPk(userId)
    .then((user) => {
      if (user.firstName) {
        return Order.create({
          productQuantity: amount,
          totalOrder: preTotal,
        }).then((order) => {
          order
            .setUser(userId)
            .then(() => Products.findByPk(id))
            .then((product) => {
              order.setProduct(product);
              res.send({ product, order });
            })
            .catch((error) => res.status(400).send(error));
        });
      }
    })
    .catch((error) => {
      console.log(error)
      res.status(404).send(error)
    });
});

router.put("/:id", (req, res, next) => {
  const { productQuantity } = req.body;
  const orderId = req.params.id;
  Order.findByPk(orderId).then((order) => {
    if (order.id) {
      order
        .update({
          productQuantity,
        })
        .then((order) => {
          res.send(order);
        });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  const orderId = req.params.id;
  Order.findByPk(orderId)
    .then((order) => order.destroy())
    .catch((error) => res.status(404).send(error));
});
module.exports = router;
