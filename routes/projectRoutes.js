const projectControler=require("../controlers/projectControler");
const { protect } = require("../midlewares/protection");
const {uploadImages} = require("../midlewares/uploadImage")
const {addProject, addMedia,getProject}=projectControler
const express = require("express");
const projectRoutes = express.Router();
projectRoutes.route("/addProject").post(protect, addProject);
projectRoutes.route("/getProject").get(protect, getProject);
projectRoutes.route("/addMedia").post(protect,uploadImages, addMedia);
module.exports = projectRoutes