const express = require("express");
const bodyParser = require("body-parser");
const responseTime = require("response-time");
const mysql = require("mysql2");
const cookieParser = require('cookie-parser');

const { PORT, DB_FORCE, DB_ALTER } = require("./config/server_config");
const db = require("./config/db_config");
// const Category = require("./models/categories");
// const Product = require("./models/products")
const { Product, Category } = require("./models/index");
const { router: apiRoutes } = require("./routes/api_routes");
const app = express();

// //create connection to db
// const connection = mysql.createConnection({
//   host: DB_HOST,
//   user: DB_USER,
//   password: DB_PASS,
//   database: DB_DATABASE,
// });
app.use(cookieParser())
app.use(responseTime());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`server is running for shop cart app at ${PORT}`);

  try {
    console.log("inside try catch for db.sync");
    if (DB_FORCE === true) await db.sync({ force: true });
    else if (DB_ALTER === true) await db.sync({ alter: true });
    else await db.sync();
    // await db.sync();

    console.log("here we get the how many models our db have :", db.models);
  } catch (error) {
    console.log("There is some error in db sync", error);
  }

  console.log("db got connected successfully, yay !");

  // const res = await Category.findByPk(5);
  // console.log(res, "line 44");
  // console.log(await res.getProducts());
  // console.log(await res.countProducts());

  // const res = await Product.create({
  //   id : 103,
  //   title :"Blue saari",
  //   description : "Banarsi saare foe beautiful girls ",
  //   price : 500,
  //   image : "some random image 3",
  //   categoryId : 1

  // })
  // console.log(res, " here is the query run for product entry ")

  //  const res = await Category.create({
  //     name : "Aashish",
  //     description : "SDE-2 @ Google"
  //   })

  //   console.log(res);

  // connection.connect((err)=>{
  //   if(err)
  //   {
  //     console.log("DB connection is failed:",err)
  //     return ;
  //   }
  //   console.log("DB connection is successfull")
  //   connection.query("select * from test_table", (err, result)=> {
  //     if(err)
  //     {
  //       console.log("Error while getting the results from table", err)
  //       throw err;
  //     }
  //     console.log("Data from the table is ",result, "type of the results is ", typeof(result))
  //   })
  // })

});
