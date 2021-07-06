const S = require("sequelize");
const db = require("./_db");
const { Products } = require("./");

class Order extends S.Model {}
Order.init(
  {
    productQuantity: {
      type: S.FLOAT,
      allowNull: false,
    },

    bought: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    totalOrder: {
      type: S.FLOAT,
      allowNull: false,
    },
  }, //se va a setear el id de purchase

  { sequelize: db, modelName: "order" }
);

// Order.addHook("beforeCreate", function (order) {
//   const id = order.productId;
//   Products.findByPk(id).then((prod) => {
//     prod.price !== order.productPrice
//       ? (order.productPrice = prod.price)
//       : null;
//   });
// });
module.exports = Order;
