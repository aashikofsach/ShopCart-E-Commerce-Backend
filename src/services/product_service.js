const products = [];

class ProductService {
  constructor(respository) {
    this.respository = respository;
  }

  createProductService(product) {
    const newProduct = {
      id: products.length,
      ...product,
    };

    products.push(newProduct);

    return newProduct;
  }

  async getProductsServices() {
    const response = await this.respository.getProducts();
    return response;
  }

  async getProductService(id) {
    // console.log(id, "line is 20 here ");
    // console.log(
    //   products.filter((product) => product.id == id)[0],
    //   "line is 21 ",
    // );

    // const requestedProduct = products.filter((product) => product.id == id)[0];
    // return requestedProduct;

     const response = await this.respository.getProduct(id);
    return response;
  }
}

module.exports = ProductService;
