const express = require("express");
const bodyParser = require("body-parser");
const responseTime = require("response-time");
const mysql = require("mysql2");

const { PORT } = require("./config/server_config");
const db = require ( "./config/db_config");
const Category = require("./models/categories");
const { router: apiRoutes } = require("./routes/api_routes");
const app = express();

// //create connection to db
// const connection = mysql.createConnection({
//   host: DB_HOST,
//   user: DB_USER,
//   password: DB_PASS,
//   database: DB_DATABASE,
// });

app.use(responseTime());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, async() => {
  console.log(`server is running for shop cart app at ${PORT}`);

  await db.sync() ;
  console.log("db got connected successfully, yay !")

 const res = await Category.create({
    name : "Aashish",
    description : "SDE-2 @ Google"
  })

  console.log(res);

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
