// req.body={idUser,pedidos:[idpedido1(get con el id nos trae el pedido {cant y id de prducto}),idpedido2]}

//1- create q va a crear la orden por ende el id
//2-map con los pedidos seteandoles el id de purchase

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
  const { total, pedidos } = req.body; //en pedidos viene un array de orders={}

  pedidos.map();
  PurchaseOrder.create();
});
