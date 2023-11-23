const { Client } = require("../models");

exports.addClientReview = async (req, res, next) => {
  try {
    const { file } = req;
    const { clientName, userName, message, ratting } = req.body;
    const newClient = await Client.create({
      clientName,
      clientImage: file.filename,
      message,
      userName,
      ratting,
    });
    res.status(201).json({
      status: "success",
      data: {
        project: newClient,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.getClientReview = async (req, res, next) => {
  try {
    const { userName } = req.query;
    if (!userName) {
      return next(new appError("please provide userName", 401));
    } else if (userName) {
      const clients = await Client.findAll({
        where: { userName: userName },
      });
      if (!clients) {
        return next(new appError("clients does not exist", 401));
      }
      res.status(201).json({
        status: "success",
        data: {
          clients,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};
