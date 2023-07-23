const experienceControler=require("../controlers/experienceControler");
const { protect } = require("../midlewares/protection");
const {addExperience}=experienceControler
const express = require("express");
const experienceRoutes = express.Router();
experienceRoutes.route("/addExperience").post(protect, addExperience);
module.exports = experienceRoutes