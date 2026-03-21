const express = require("express");
const { createCategory , getCategories , getCategory} = require("../../controllers/category_controller");
const { pingController } = require("../../controllers/ping_controller");
const {
  createProductvalidator,
} = require("./../../middlewares/product_middleware");

const categoryRouter = express.Router();

// router.get("/", pingController);
categoryRouter.get("/",getCategories)
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/", createCategory);

module.exports = { categoryRouter };
