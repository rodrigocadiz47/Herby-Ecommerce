const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const productsRouter = require("./products");
const ordersRouter = require("./order");
const purchasesRouter = require("./purchaseOrder");

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);
router.use("/purchaseOrders", purchasesRouter);
module.exports = router;
