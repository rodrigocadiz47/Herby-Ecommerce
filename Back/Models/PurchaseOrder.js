const S = require("sequelize");
const db = require("./_db");
const Order = require("./Order");

class PurchaseOrder extends S.Model {}
PurchaseOrder.init(
  {
    deliveryRange: {
      type: S.STRING,
      allowNull: false,
    },
    wayToPay: {
      type: S.STRING,
      allowNull: false,
    },
    total: {
      type: S.INTEGER,
      allowNull: false,
    },
  }, //hacer hook para comprobar total
  { sequelize: db, modelName: "purchaseOrder" }
);

PurchaseOrder.addHook("afterCreate", async function (purchaseOrder) {
  try {
    const orders = await Order.findAll({
      where: { userId: purchaseOrder.userId, bought: false },
    });
    orders.map((order) => {
      order.setPurchaseOrder(purchaseOrder.id);
      order.bought = true;
      order.save();
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = PurchaseOrder;
