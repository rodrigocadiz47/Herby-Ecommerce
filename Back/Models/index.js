const db = require("./_db");
const User = require("./Users");
const Order = require("./Order");
const PurchaseOrder = require("./PurchaseOrder");
const Products = require("./Products");

// One to many, userId en purchaseOrder
PurchaseOrder.belongsTo(User);
User.hasMany(PurchaseOrder);

// One to many, purchaseOrderId en Order
Order.belongsTo(PurchaseOrder);
PurchaseOrder.hasMany(Order);

// One to many, productId en Order
Order.belongsTo(Products);
Products.hasMany(Order);

// One to many, userId en Order
Order.belongsTo(User);
User.hasMany(Order);

module.exports = { User, Order, PurchaseOrder, Products };
