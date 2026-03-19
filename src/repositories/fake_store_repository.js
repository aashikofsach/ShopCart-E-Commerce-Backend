const axios = require("axios");

// async function getProduct() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   //   console.log(response);

//   return response;
// }

class FakeStoreRepository {
  async getProduct() {
    const response = await axios.get("https://fakestoreapi.com/products");
    //   console.log(response);

    return response;
  }
}

//  async getProduct()

module.exports = FakeStoreRepository ;
