// const products = [];

const { internalServerError } = require("../errors/internal_server_error");
const { NotFoundError } = require("../errors/not_found_error");

class CategoryService {
  constructor(respository) {
    this.respository = respository;
  }

  async createCategory(category) {
    try {
      console.log(category, "line is 15", category.name, category.description);

      const response = await this.respository.createCategory(
        category.name,
        category.description,
      );

      return response;
    } catch (error) {
      console.log("category service :", error);
      throw new internalServerError();
    }
  }

  async getCategories() {
    try {
      const response = await this.respository.getCategories();
      return response;
    } catch (error) {
      console.log("category service :", error);
      throw new internalServerError();
    }
  }

  async getCategory(categoryId) {
    try {
      const response = await this.respository.getCategory(categoryId);
      if(!response)
        throw new NotFoundError("Category", "id", categoryId);
      return response;
    } catch (error) {
        if(error.name==="NotFoundError")
            throw error;
      console.log("category service :", error);
      throw new internalServerError();
    }
  }

  async destroyCategory(id) {
    try {
      const response = await this.respository.destroyCategory(id);
      return response;
    } catch (error) {
      console.log("category service :", error);

      throw new internalServerError();
    }
  }
}

module.exports = CategoryService;
