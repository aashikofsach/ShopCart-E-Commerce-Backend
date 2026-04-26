const { response } = require("express");
const { Category } = require("../../src/models");
const { CategoryRepository } = require("../../src/repositories");

const mockCategory = {
  id: 1,
  name: "women wear",
  description: "crops topps for women",
  createdAt: "2026-03-25T04:55:09.000Z",
  updatedAt: "2026-03-25T04:55:09.000Z",
};

const mockError = {error : "Sample Error"};

describe("tests for category repository, category creation", () => {
  test("unit test for creating a new category", async () => {
    //prepare
    const respository = new CategoryRepository();
    jest.spyOn(Category, "create").mockImplementation(() => mockCategory);

    //Act
    const response = await respository.createCategory(
      "women wear",
      "crops topps for women",
    );

    //expect / assert
    expect(response.name).toBe("women wear");
    expect(response.description).toBe("crops topps for women");
  });
  test("unit test for should not creating a new category and throw error ", async () => {
    //prepare
    const respository = new CategoryRepository();
    jest.spyOn(Category, "create").mockImplementation(() => {
        throw mockError
    });

    //Act
   try {

    const response = await respository.createCategory(
      "women wear",
      "crops topps for women",
    );
    
   } catch (error) {
    console.log(error)
    console.log(mockError);
    expect(error).toBe(mockError)
    
   }

   
  });
});



describe("tests for category repository, get category", () => {
  test("unit test for should get one  category", async () => {
    //prepare
    const respository = new CategoryRepository();
    jest.spyOn(Category, "findByPk").mockImplementation(() => mockCategory);

    //Act
    const response = await respository.getCategory(1);

    //expect / assert
    expect(response.name).toBe("women wear");
    expect(response.description).toBe("crops topps for women");
  });
  test("unit test for should not get a  category and throw error ", async () => {
    //prepare
    const respository = new CategoryRepository();
    jest.spyOn(Category, "findByPk").mockImplementation(() => {
        throw mockError
    });

    //Act
   try {

    const response = await respository.getCategory(1);
    
   } catch (error) {
    console.log(error)
    console.log(mockError);
    expect(error).toBe(mockError)
    
   }

   
  });
});



describe("tests for category repository, get all categories", () => {
  test("unit test for should get all categories", async () => {
    //prepare
    const respository = new CategoryRepository();
    jest.spyOn(Category, "findAll").mockImplementation(() => [mockCategory]);

    //Act
    const response = await respository.getCategories();

    //expect / assert
    // expect(response.name).toBe("women wear");
    // expect(response.description).toBe("crops topps for women");

    expect(response).toHaveLength(1)
    expect(response).toContain(mockCategory)

  });
  test("unit test for should not get all categories and throw error ", async () => {
    //prepare
    const respository = new CategoryRepository();
    jest.spyOn(Category, "findAll").mockImplementation(() => {
        throw mockError
    });

    //Act
   try {

    const response = await respository.getCategories();
    
   } catch (error) {
    console.log(error)
    console.log(mockError);
    expect(error).toBe(mockError)
    
   }

   
  });
});



describe("tests for category repository, destroy category", () => {
  test("unit test for should destroy one category", async () => {
    //prepare
    const respository = new CategoryRepository();
    jest.spyOn(Category, "destroy").mockImplementation(() => 1);

    //Act
    const response = await respository.destroyCategory(1);

    //expect / assert
    // expect(response.name).toBe("women wear");
    // expect(response.description).toBe("crops topps for women");

    expect(response).toBe(1)

  });
  test("unit test for should not get destroy  category and throw error ", async () => {
    //prepare
    const respository = new CategoryRepository();
    jest.spyOn(Category, "destroy").mockImplementation(() => {
        throw mockError
    });

    //Act
   try {

    const response = await respository.destroyCategory(1);
    
   } catch (error) {
    console.log(error)
    console.log(mockError);
    expect(error).toBe(mockError)
    
   }

   
  });
});
