const express = require("express");

const v1Routes = express.Router() ;

const {router : pingRoutes} =require("./ping_routes");
const {router : productRoutes} = require("./product_routes");
const {categoryRouter : categoryRouter} = require("./category_router");
const { userRouter } = require("./user_router");
const {cartRouter} = require("./cart_router")
const {orderRouter} =require("./order_router");

v1Routes.use("/ping", pingRoutes);
v1Routes.use("/product", productRoutes);
v1Routes.use("/category",categoryRouter)
v1Routes.use("/user",userRouter)
v1Routes.use("/cart",cartRouter)
v1Routes.use("/orders", orderRouter);

module.exports = v1Routes;