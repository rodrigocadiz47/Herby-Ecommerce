const express = require("express");
const router = express.Router();
const { Order, Products } = require("../Models");

// {
//   id: 1,
//   name: 'Banana',
//   category: 'fruit',
//   price: 100,
//   stock: 250,
//   seasonal: true,
//   description: 'La bananaaporta vitaminas A, C, B1, B2, B6, B9 -ácido fólico- y E.',
//   image: 'https://www.suat.com.uy/upcms/thumbs/648x365/novedades/imagen/955_big.jpg',
//   createdAt: '2021-07-01T19:08:53.639Z',
//   updatedAt: '2021-07-01T19:08:53.639Z',
//   amount: 1,
//   preTotal: 100,
//   userId: 6
// }

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
      order.setUser(userId)
      .then(() => {
        Products.findByPk(id)
        .then(product=>{        
          res.send(product)
        })
      });
    })
});

router.delete("/:id", (req, res, next) => {
  const orderId = req.params.id;
  Order.findByPk(orderId).then((order) => order.destroy());
});
module.exports = router;
