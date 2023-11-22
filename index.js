const express= require("express")
require("dotenv").config();
var bodyParser = require("body-parser");
var path = require('path')
var cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, '/uploads')))
// app.use(express.static(path.join(__dirname, '/uploads/videos')))
const authRoute = require("./routes/authRoutes");
const projectRoute = require("./routes/projectRoutes");
const experienceRoute =require("./routes/experienceRoutes");
const skillRoutes = require("./routes/skillRoutes");
app.use("/api/v1", authRoute);
app.use("/api/v1", projectRoute);
app.use("/api/v1", experienceRoute);
app.use("/api/v1", skillRoutes);

app.use((err, req, res, next)=>{
  err.statusCode=err.statusCode || 500
  err.status=err.status || "error"
  res.status(err.statusCode).json({
    status: err.status,
    message:err.message
  })
})

module.exports = app;