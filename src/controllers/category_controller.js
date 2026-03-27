const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const {
  createProductService,
  getProductsServices,
  getProductService,
} = require("../services/product_service");

// const ProductService = require("../services/product_service");
const CategoryService = require("../services/category_service");
// const FakeStoreRepository = require("../repositories/fake_store_repository");
const CategoryRepository = require("../repositories/category_repository");
const { errorResponse } = require("../utils/error_response");
const ProductRepository = require("../repositories/product_repository");

const categoryService = new CategoryService(new CategoryRepository() , new ProductRepository());

async function getProductForCategoryId(req, res)
{
   try {
    // here we do db interaction
    // console.log(req.body)
    const id = req.params.id;

    const response = await categoryService.getProductByCategoryId(id);

    return res.status(StatusCodes.OK).json({
      sucess: true,
      error: null,
      message: "Successfully fetched products for the category",
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong category controller", error);
    return res
      .status(error.statusCode)
      .json(errorResponse(error.ReasonPhrases, error));
  }

}

async function createCategory(req, res) {
  try {
    // here we do db interaction
    console.log(req.body, "thisbis line 18");

    const response = await categoryService.createCategory(req.body);

    return res.status(StatusCodes.CREATED).json({
      sucess: true,
      error: null,
      message: ReasonPhrases.CREATED + " Category",
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong category controller", error);
  return res
      .status(error.statusCode)
      .json(errorResponse(error.ReasonPhrases, error));
  }
}

async function getCategories(req, res) {
  try {
    // here we do db interaction
    // console.log(req.body)

    const response = await categoryService.getCategories();

    return res.status(StatusCodes.OK).json({
      success: true,
      error: null,
      message: ReasonPhrases.OK,
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong category controller", error);
    return res
      .status(error.statusCode)
      .json(errorResponse(error.ReasonPhrases, error));
  }
}

async function getCategory(req, res) {
  try {
    // here we do db interaction
    // console.log(req.body)
    const id = req.params.id;
    console.log(id);

    const response = await categoryService.getCategory(id);

    return res.status(StatusCodes.OK).json({
      sucess: true,
      error: null,
      message: ReasonPhrases.OK,
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong category controller", error);
    return res
      .status(error.statusCode)
      .json(errorResponse(error.ReasonPhrases, error));
  }
}

async function destroyCategory(req, res) {
  try {
    const id = req.params.id;
    // console.log(id);

    const response = await categoryService.destroyCategory(id);

    return res.status(StatusCodes.OK).json({
      sucess: true,
      error: null,
      message: ReasonPhrases.OK,
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong category controller", error);
     return res
      .status(error.statusCode)
      .json(errorResponse(error.ReasonPhrases, error));
  }
}

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  destroyCategory,
  getProductForCategoryId
};
