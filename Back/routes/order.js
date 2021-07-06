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
    attributes: ["id", "totalOrder", "productId", "productQuantity"],
    include: { model: Products, attributes: ["name", "price"] },
  })
    .then((orders) => res.send(orders))
    .catch((error) => res.status(404).send(error));
});

router.post("/:id", (req, res, next) => {
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
      console.log(error);
      res.status(404).send(error);
    });
});

router.put("/:productId", (req, res, next) => {
  const { quantityChange } = req.body;
  const productId = req.params.productId;
  Order.findOne({ where: { productId: productId } }).then((order) => {
    if (order.id) {
      Products.findByPk(order.productId).then((product) => {
        order
          .update({
            productQuantity: quantityChange,
            totalOrder: quantityChange * product.price,
          })
          .then((order) => {
            res.send(order);
          });
      });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  const productID = req.params.id;
  Order.findOne({
    where: {
      productId: productID,
    },
  })
    .then((order) => {
      order.destroy();
      res.send(order);
    })
    .catch((error) => res.status(404).send(error));
});
module.exports = router;
