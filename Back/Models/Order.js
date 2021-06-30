const S = require("sequelize");
const db = require("./_db");
const { Products } = require("./index");

class Order extends S.Model {}
Order.init(
  {
    prductName: {
      type: S.STRING,
      allowNull: false,
    },
    productQuantity: {
      type: S.INTEGER,
      allowNull: false,
    },
    productPrice: {
      type: S.INTEGER,
      allowNull: false,
    },
    productId: {
      type: S.INTEGER,
      allowNull: false,
    },
    totalOrder: {
      type: S.VIRTUAL,
      get() {
        return this.productQuantity * this.productPrice;
      },
    },
  }, //se va a setear el id de purchase

  { sequelize: db, modelName: "order" }
);

Order.addHook("beforeCreate", function (order) {
  //comparamos precio del front con el back
  Products.findByPk(order.productId).then((prod) => {
    prod.price !== order.productPrice
      ? (order.productPrice = prod.price)
      : null;
  });
});
module.exports = Order;
