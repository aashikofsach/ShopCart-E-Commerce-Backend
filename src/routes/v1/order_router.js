const express = require("express");

const { OrderController } = require("../../controllers");
const { isLoggedIn } = require("../../middlewares/auth_middleware");
const {  createOrder} = OrderController;
const orderRouter = express.Router();

// router.get("/", pingController);
orderRouter.post("/",isLoggedIn, createOrder);



module.exports = { orderRouter };
