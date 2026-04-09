
const {Cart} = require("../models/index");
// const axios = require("axios");

// async function getProduct() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   //   console.log(response);

//   return response;
// }

class CartRepository {
  async getCart() {
  try {
      const response = await Cart.findAll();
    //   console.log(response);

    return response;
    
  } catch (error) {
    console.log(error, "CartRepository error")
    throw error;
    
  }
  }

  async getCart(id) {
   try {
     const response = await Cart.findByPk(id)
      console.log(response, "what we get ");
    

    return response;
   } catch (error) {
    console.log(error, "CartRepository error");
    throw error;
    
   }
  }

  async createCart(userId) {
   try {
     const response = await Cart.create({id : userId})
    // Log the response for debugging
    console.log("API Response:", response);
    return response;
    
   } catch (error) {
    console.log(error, "CartRepository error");
    throw error;
    
   }
  }

  async destroyCart(userId)
  {
    try {
        const response = await Cart.destroy({
            where :{
                id : userId
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

module.exports = CartRepository;
