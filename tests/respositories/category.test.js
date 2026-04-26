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
    expect(error).toBe(mockError)
    
   }

   
  });
});
