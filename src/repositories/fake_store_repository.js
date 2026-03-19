const axios = require("axios");

// async function getProduct() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   //   console.log(response);

//   return response;
// }

class FakeStoreRepository {
  async getProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    //   console.log(response);

    return response.data;
  }

  async getProduct(id) {
    const response = await axios.get("https://fakestoreapi.com/products/"+id);
    //   console.log(response);

    return response.data;
  }
}

//  async getProduct()

module.exports = FakeStoreRepository ;
