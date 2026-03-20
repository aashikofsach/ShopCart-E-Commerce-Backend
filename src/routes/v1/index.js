const express = require("express");

const v1Routes = express.Router() ;

const {router : pingRoutes} =require("./ping_routes");
const {router : productRoutes} = require("./product_routes");
const {categoryRouter : categoryRouter} = require("./category_router");

v1Routes.use("/ping", pingRoutes);
v1Routes.use("/product", productRoutes);
v1Routes.use("/category",categoryRouter)

module.exports = v1Routes;