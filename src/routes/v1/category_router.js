const express = require("express");
const { createCategory , getProducts , getProduct} = require("../../controllers/category_controller");
const { pingController } = require("../../controllers/ping_controller");
const {
  createProductvalidator,
} = require("./../../middlewares/product_middleware");

const categoryRouter = express.Router();

// router.get("/", pingController);
categoryRouter.get("/",getProducts)
categoryRouter.get("/:id", getProduct);
categoryRouter.post("/", createCategory);

module.exports = { categoryRouter };
