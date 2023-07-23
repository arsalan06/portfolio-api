const { Experience } = require("../models");

exports.addExperience = async (req, res, next) => {
  try {
    const { companyName, loction, designation, startDate, endDate, present } =
      req.body;
    const experience = await Experience.create({
      companyName,
      loction,
      designation,
      startDate,
      endDate,
      present,
    });
    res.status(201).json({
      status: "success",
      data: {
        experience,
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
