const express = require("express");
const path = require("path");
const cors = require("cors")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const app =express();
dotenv.config({path:"./Config.env"})
require("./DataBaseConnection/Connection")
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(require("./Routers/Router"));
app.use(cookieParser());
app.use(cors())

app.listen(port,()=>{
    console.log("Successful");
}) 