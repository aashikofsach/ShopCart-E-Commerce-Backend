const express = require("express");

const v1Routes = express.Router() ;

const {router : pingRoutes} =require("./pingRoutes");
const {router : productRoutes} = require("./productRoutes");

v1Routes.use("/ping", pingRoutes);
v1Routes.use("/product", productRoutes);

module.exports = v1Routes;