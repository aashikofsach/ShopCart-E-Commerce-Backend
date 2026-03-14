const express = require("express");
const { productController } = require("../../controllers/ping_controller");

const router = express.Router() ;


router.get("/", productController);

module.exports = {router};