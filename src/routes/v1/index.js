const express = require("express");

const v1Routes = express.Router() ;

const {router : pingRoutes} =require("./ping_routes");
const {router : productRoutes} = require("./product_routes");

v1Routes.use("/ping", pingRoutes);
v1Routes.use("/product", productRoutes);

module.exports = v1Routes;