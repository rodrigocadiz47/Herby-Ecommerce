const express = require("express");
const router = express.Router();
const { PurchaseOrder, Order } = require("../Models");

router.get("/:id", (req, res, next) => {
  //trae todos las ordenes de compra de un usuario [{purchase1}{purchase2}]//purchase1={id,fecha,total,[order1,order2]}// order={id,productId, productName, productQuantity,productPrice}
  const id = req.params.id;
  PurchaseOrder.findAll({
    where: {
      userId: id,
    },
    include: [
      {
        model: Order,
        attribute: { id, productName, productPrice, productQuantity },
      },
    ],
  }).then((purchases) => res.send(purchases));
});

router.post("/:id", (req, res, next) => {
  const userId = req.params.id;
  const { orders, total } = req.body; //orders=[{order1},{order2},{order3},{order4}

  PurchaseOrder.create({ total }).then((purchase) => {
    purchase.setUser(userId); //le seteo el id del usuario
    orders.map((order) => {
      order.setPurchaseOrder(purchase.id);
      order.bought = true; //cambiando el estado de la order a comprado
    });
  });
});
module.exports = router;
