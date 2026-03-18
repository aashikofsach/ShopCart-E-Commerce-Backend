function createProduct(req, res) {
  try {
    // here we do db interaction
    console.log(req.body)

    return res.json({
      sucess: true,
      error: null,
      message: "Successful created the product ",
      data: {
        id: Math.random() * 20,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image: req.body.image,
      },
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

module.exports = {
  createProduct,
};
