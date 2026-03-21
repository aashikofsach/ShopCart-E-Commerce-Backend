const express = require("express");
const { createCategory , getCategories , getCategory, destroyCategory} = require("../../controllers/category_controller");
const { pingController } = require("../../controllers/ping_controller");
const {
  createProductvalidator,
} = require("./../../middlewares/product_middleware");

const categoryRouter = express.Router();

// router.get("/", pingController);
categoryRouter.get("/",getCategories)
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/", createCategory);
categoryRouter.delete("/:id",destroyCategory)

module.exports = { categoryRouter };
