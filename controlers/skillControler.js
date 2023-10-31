const { Skill } = require("../models");

exports.addSkill = async (req, res, next) => {
  try {
    const { title, description, userName, isCoreSkill, ratePercent } = req.body;
    const skill = await Skill.create({
      title,
      description,
      userName,
      isCoreSkill,
      ratePercent,
    });
    res.status(201).json({
      status: "success",
      data: {
        skill,
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

exports.getSkills = async (req, res, next) => {
  try {
    const { userName } = req.query;
    if (!userName) {
      return next(new appError("please provide userName", 401));
    } else if (userName) {
      const skills = await Skill.findAll({
        where: { userName: userName },
      });
      if (!skills) {
        return next(new appError("Skills does not exist", 401));
      }
      res.status(201).json({
        status: "success",
        data: {
          skills,
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