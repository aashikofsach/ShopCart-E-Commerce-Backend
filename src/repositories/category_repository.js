
const Category = require("../models/categories");
// const axios = require("axios");

// async function getProduct() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   //   console.log(response);

//   return response;
// }

class CategoryRepository {
  async getCategories() {
  try {
      const response = await Category.findAll();
    //   console.log(response);

    return response;
    
  } catch (error) {
    console.log(error, "categoryRepository error")
    throw error;
    
  }
  }

  async getCategory(id) {
   try {
     const response = await Category.findByPk(id)
      console.log(response, "what we get ");
    

    return response;
   } catch (error) {
    console.log(error, "categoryRepository error");
    throw error;
    
   }
  }

  async createCategory(name , description) {
   try {
     const response = await Category.create({name , description})
    // Log the response for debugging
    console.log("API Response:", response);
    return response;
    
   } catch (error) {
    console.log(error, "categoryRepository error");
    throw error;
    
   }
  }

  async destroyCategory(categoryId)
  {
    try {
        const response = await Category.destroy({
            where :{
                id : categoryId
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

module.exports = CategoryRepository;
