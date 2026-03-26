
// const Category = require("../models/categories");
const {Product} = require( "../models/index")
// const axios = require("axios");

// async function getProduct() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   //   console.log(response);

//   return response;
// }

class ProductRepository {
  async getProducts() {
  try {
      const response = await Product.findAll();
    //   console.log(response);

    return response;
    
  } catch (error) {
    console.log(error, "ProductRepository error")
    throw error;
    
  }
  }

  async getProduct(id) {
   try {
     const response = await Product.findByPk(id)
      console.log(response, "what we get ");
    

    return response;
   } catch (error) {
    console.log(error, "ProductRepository error");
    throw error;
    
   }
  }

  async createProduct(title , description , price , image , categoryId) {
   try {
     const response = await Product.create({title , description, price, image, categoryId})
    // Log the response for debugging
    console.log("API Response:", response);
    return response;
    
   } catch (error) {
    console.log(error, "ProductRepository error");
    throw error;
    
   }
  }

  async destroyProduct(productId)
  {
    try {
        const response = await Product.destroy({
            where :{
                id : productId
            }
        })

        return response ;
        
    } catch (error) {
        console.log("There is something error as", error)
        throw error ;
    }
  }
}


//  async getProduct()

module.exports = ProductRepository;
