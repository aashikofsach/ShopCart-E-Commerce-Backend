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
    const response = await this.respository.getProduct();
    return response.data;
  }

  getProductService(id) {
    console.log(id, "line is 20 here ");
    console.log(
      products.filter((product) => product.id == id)[0],
      "line is 21 ",
    );

    const requestedProduct = products.filter((product) => product.id == id)[0];
    return requestedProduct;
  }
}

module.exports = ProductService;
