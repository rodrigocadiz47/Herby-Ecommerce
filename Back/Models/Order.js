const S = require("sequelize");
const db = require("./_db")

class Order extends S.Model {}
Order.init(
  {
    cantidad: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "order" }
);
module.exports= Order