const db = require("./_db");
const User = require("./Users");
//const Product= require("./Product")
const Order = require("./Order");
const PurchaseOrder = require("./PurchaseOrder");
const Products = require("./Products");

PurchaseOrder.belongsTo(User)
User.hasMany(PurchaseOrder)

Order.belongsTo(PurchaseOrder)
PurchaseOrder.hasMany(Order)

Order.belongsTo(Products)
Products.hasMany(Order)

module.exports = { User, Order, PurchaseOrder, Products };
