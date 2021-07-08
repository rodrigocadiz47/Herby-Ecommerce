const express = require("express");
const router = express.Router();
const { PurchaseOrder, Order, Products, User } = require("../Models");
const transporter = require("../mailer");

router.get("/admin", (req, res, next) => {
  PurchaseOrder.findAll({
    include: [
      {
        model: Order,
        include: [{ model: Products }],
      },
      {
        model: User,
        attributes: ["firstName", "address", "phone"],
      },
    ],
  })
    .then((pOrders) => {
      res.send(pOrders);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res, next) => {
  //trae todos las ordenes de compra de un usuario [{purchase1}{purchase2}]//purchase1={id,fecha,total,[order1,order2]}// order={id,productId, productName, productQuantity,productPrice}
  const id = req.params.id;
  PurchaseOrder.findAll({
    where: {
      userId: id,
    },
    include: [{ model: Order, include: [{ model: Products }] }],
  })
    .then((purchases) => {
        res.send(purchases);
    })
    .catch((error) => res.status(500).send(error));
});

router.post("/:id", async (req, res, next) => {
  const userId = req.params.id;
  // const { total } = req.body; orders=[{order1},{order2},{order3},{order4}
  try {
    const orders = await Order.findAll({
      where: { userId: userId, bought: false },
    }); //obtenemos el arreglo de ordenes usando el id
    const numberTotals = orders.map((order) => order.totalOrder); //creamos un nuevo arreglo con el total de cada orden
    const total = numberTotals.reduce((total, num) => {
      return total + num;
    }, 0);
    const order = await PurchaseOrder.create({
      total: total,
      userId: userId,
      deliveryRange: "caba",
      wayToPay: "efectivo",
    }); //ver con el front para no harcodear 2 propiedades

    orders.map((order) =>
      order.stockUpdate(order.productQuantity, order.productId)
    );
    const user =await User.findByPk(userId)

    transporter.sendMail({
        from: '"HERBY" <herbymailer@gmail.com>',
        to: user.email,
        subject: "Nuevo pedido ingresado",
        text: `Estimad@ ${user.firstName} desde Herby le queremos agradecer por su compra.`,
      });


    res.send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
