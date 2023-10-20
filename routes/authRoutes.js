const authControler = require("../controlers/authControler");
const express = require("express");
const { uploadImage } = require("../midlewares/uploadImage");
const { contact } = require("../controlers/contactControler");
const authRouter = express.Router();
const {signup, login, userDetail}=authControler
authRouter.post("/signup",uploadImage,signup);
authRouter.post("/login",login);
authRouter.get("/userDetail",userDetail);
authRouter.post("/contact",contact);
module.exports = authRouter