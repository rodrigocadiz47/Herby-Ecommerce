const S = require("sequelize");
const db = require("./_db");

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
module.exports = PurchaseOrder;
