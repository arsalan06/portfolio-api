const skillControler=require("../controlers/skillControler");
const {addSkill, getSkills}=skillControler
const express = require("express");
const skillRoutes = express.Router();
skillRoutes.route("/addskill").post(addSkill);
skillRoutes.route("/getSkills").get(getSkills);
module.exports = skillRoutes