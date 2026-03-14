const express = require('express');

const {PORT} = require("./config/serverConfig");
const { pingController } = require('./controllers/pingController');
const app = express() ;


app.get("/api/v1/ping",pingController )

app.listen(PORT, ()=> {
    console.log(`server is running for shop cart app at ${PORT}`)
})