const { badRequestError } = require("../errors/bad_request_error");
const { internalServerError } = require("../errors/internal_server_error");
const { NotFoundError } = require("../errors/not_found_error");

const products = [];

class ProductService {
  constructor(respository) {
    this.respository = respository;
  }

  async createProductService(product) {
    // const newProduct = {
    //   id: products.length,
    //   ...product,
    // };

    // products.push(newProduct);

    try {
      const response = await this.respository.createProduct(
        product.title,
        product.description,
        product.price,
        product.image,
        product.categoryId,
      );

      return response;
    } catch (error) {
      console.log("here we are in product_service", error);
      throw new internalServerError();
    }
  }

  async getProductsServices(query) {
    try {
      if(query.limit && (isNaN(query.limit)) || (query.offset && isNaN(query.offset)))
      {
        throw new badRequestError("limit , offset", true)
      }
      if(query.min_price && (isNaN(query.min_price)))
        throw new badRequestError("min_price", true)
      if(query.max_price && (isNaN(query.max_price)))
        throw new badRequestError("max_price", true);

      console.log("limit and offset ki value ", +query.limit , query.offset)
      const response = await this.respository.getProducts(+query.limit , +query.offset , +query.min_price , +query.max_price);
      return response;
    } catch (error) {
      if(error.name === "badRequestError")
        throw error ;
      console.log("here we are in product_service", error);
      throw new internalServerError();
    }
  }

  async getProductService(id) {
    // console.log(id, "line is 20 here ");
    // console.log(
    //   products.filter((product) => product.id == id)[0],
    //   "line is 21 ",
    // );

    // const requestedProduct = products.filter((product) => product.id == id)[0];
    // return requestedProduct;
    try {
      const response = await this.respository.getProduct(id);
      if (!response) throw new NotFoundError("Product", "id", id);
      return response;
    } catch (error) {
      if (error.name === "NotFoundError") throw error;
      console.log("here we are product service", error);
      throw new internalServerError();
    }
  }

  async destroyProduct(id) {
    try {
      const response = await this.respository.destroyProduct(id);
      if (!response) throw new NotFoundError("Product", "id", id);
      return response;
    } catch (error) {
      if (error.name === "NotFoundError") throw error;
      console.log("Product service :", error);

      throw new internalServerError();
    }
  }
}

module.exports = ProductService;
