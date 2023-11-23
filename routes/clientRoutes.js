
const express = require("express");
const { uploadImage } = require("../midlewares/uploadImage");
const { addClientReview, getClientReview } = require("../controlers/clientReviewControler");
const clientRouter = express.Router();
clientRouter.post("/addClientReview",uploadImage,addClientReview);
clientRouter.get("/getClientReview",uploadImage,getClientReview);
module.exports = clientRouter