const express = require("express");

const v1Routes = express.Router() ;

const {router : pingRoutes} =require("./ping_routes");
const {router : productRoutes} = require("./product_routes");
const {categoryRouter : categoryRouter} = require("./category_router");
const { userRouter } = require("./user_router");

v1Routes.use("/ping", pingRoutes);
v1Routes.use("/product", productRoutes);
v1Routes.use("/category",categoryRouter)
v1Routes.use("/user",userRouter)

module.exports = v1Routes;