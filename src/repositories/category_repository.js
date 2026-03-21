
const Category = require("../models/categories");
// const axios = require("axios");

// async function getProduct() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   //   console.log(response);

//   return response;
// }

class CategoryRepository {
  async getCategories() {
    const response = await Category.findAll();
    //   console.log(response);

    return response;
  }

  async getCategory(id) {
    const response = await Category.findByPk(id)
    //   console.log(response);

    return response;
  }

  async createCategory(name , description) {
    const response = await Category.create({name , description})
    // Log the response for debugging
    console.log("API Response:", response);
    return response;
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
    }
  }
}


//  async getProduct()

module.exports = CategoryRepository;
