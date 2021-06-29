const S = require("sequelize");
const sequelize = require("../db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      notEmpty: true
    },
    category: {
      type: S.ENUM("fruit", "veg"),
      allowNull: false,
    },
    price: {
      tpye: S.INTEGER,
      allowNull: false,
      min: 1,
      isNumeric: true
    },
    stock: {
      type: S.INTEGER,
      defaultValue = 0
    },

    seasonal: {
      type: S.BOOLEAN,
      defaultValue: false
    },

    available: {
      type: S.VIRTUAL,
      get() {
        this.stock > 0 ? true : false;
      },
    },

    description: {
      type: S.TEXT,
    },

    Image:{
        type: S.STRING,
        defaultValue: "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        isUrl: true,
    }
  },
  { sequelize, modelName: "Product" }
);

module.exports = Product;