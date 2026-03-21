// const products = [];

class CategoryService {
  constructor(respository) {
    this.respository = respository;
  }

  async createCategory(category) {
    // const newProduct = {
    //   id: products.length,
    //   ...product,
    // };

    // products.push(newProduct);
    console.log(category, "line is 15", category.name , category.description);

    const response = await this.respository.createCategory(category.name , category.description);

    return response;
  }

  async getCategories() {
    const response = await this.respository.getCategories();
    return response;
  }

  async getCategory(id) {
    // console.log(id, "line is 20 here ");
    // console.log(
    //   products.filter((product) => product.id == id)[0],
    //   "line is 21 ",
    // );

    // const requestedProduct = products.filter((product) => product.id == id)[0];
    // return requestedProduct;

     const response = await this.respository.getCategory(id);
    return response;

  }

  async destroyCategory(id)
  {
    const response = await this.respository.destroyCategory(id);
    return response;
  }
}

module.exports = CategoryService;
