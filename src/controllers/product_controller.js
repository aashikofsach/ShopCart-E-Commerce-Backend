const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const {
  createProductService,
  getProductsServices,
  getProductService,
} = require("../services/product_service");

const ProductService = require ( "../services/product_service");
const FakeStoreRepository = require("../repositories/fake_store_repository");

const productService = new ProductService(new FakeStoreRepository());



async function createProduct(req, res) {
  try {
    // here we do db interaction
    console.log(req.body);

    const response = await productService.createProductService(req.body);

    return res.status(StatusCodes.CREATED).json({
      sucess: true,
      error: null,
      message: ReasonPhrases.CREATED,
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

async function getProducts(req, res) {
  try {
    // here we do db interaction
    // console.log(req.body)

    const response = await productService.getProductsServices();

    return res.status(StatusCodes.OK).json({
      success: true,
      error: null,
      message: ReasonPhrases.OK,
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

async function getProduct(req, res) {
  try {
    // here we do db interaction
    // console.log(req.body)
    const id = req.params.id;
    console.log(id)

    const response = await productService.getProductService(id);

    return res.status(StatusCodes.OK).json({
      sucess: true,
      error: null,
      message: ReasonPhrases.OK,
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProduct,
};
