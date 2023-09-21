const { Skill } = require("../models");

exports.addSkill = async (req, res, next) => {
  try {
    const { title, description, userId } = req.body;
    const skill = await Skill.create({
      title,
      description,
      userId,
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
