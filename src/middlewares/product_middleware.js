function createProductvalidator(req, res, next) {
    console.log(req.body, "we are here")
  if (!req.body.title) {
    return res.json({
      success: false,
      message: "Title is not present insider the req body",
    });
  }


  next();
}

module.exports = {
  createProductvalidator,
};
