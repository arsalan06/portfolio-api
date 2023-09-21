const skillControler=require("../controlers/skillControler");
const {addSkill}=skillControler
const express = require("express");
const skillRoutes = express.Router();
skillRoutes.route("/addskill").post(addSkill);
module.exports = skillRoutes