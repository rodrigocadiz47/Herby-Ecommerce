const S = require("sequelize");
const sequelize = require("./_db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    category: {
      type: S.ENUM("fruit", "veg"),
      allowNull: false,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    stock: {
      type: S.FLOAT,
      defaultValue: 0,
    },

    seasonal: {
      type: S.BOOLEAN,
      defaultValue: false,
    },

    available: {
      type: S.BOOLEAN,
      defaultValue: true,
    },

    description: {
      type: S.TEXT,
    },

    image: {
      type: S.STRING,
      defaultValue:
        "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      validate: { isUrl: true },
    },
  },
  { sequelize, modelName: "product" }
);


module.exports = Product;