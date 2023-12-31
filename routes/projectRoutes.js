const projectControler = require("../controlers/projectControler");
const { protect } = require("../midlewares/protection");
const { uploadImages } = require("../midlewares/uploadImage");
const { addProject, addMedia, addVideo, getProject } = projectControler;
const express = require("express");
const { uploadVideo } = require("../midlewares/uploadVideo");
const projectRoutes = express.Router();
projectRoutes.route("/addProject").post(addProject);
projectRoutes.route("/getProject").get(getProject);
projectRoutes.route("/addMedia").post(uploadImages, addMedia);
projectRoutes.route("/addVideo").post(uploadVideo, addVideo);
module.exports = projectRoutes;
