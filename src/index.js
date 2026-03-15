const express = require("express");
const bodyParser = require('body-parser')
const responseTime = require('response-time');

const { PORT } = require("./config/server_config");
const {router: apiRoutes} =  require("./routes/api_routes");
const app = express();

app.use(responseTime());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}))

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`server is running for shop cart app at ${PORT}`);
});
