const { User } = require("../models");
const jwt = require("jsonwebtoken");
const appError = require("../utils/appError");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
exports.signup = async (req, res, next) => {
  try {
    const {
      fullName,
      userName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      secondPhoneNumber,
      telegram,
      skype,
      country,
      state,
      city,
      languages,
      totalExperience,
      totalProject,
      numberAward,
      role,
    } = req.body;
    const { file } = req;
    const profilePic = file.filename;
    if (password !== confirmPassword) {
      return next(
        new appError("Password and confirm password is not same", 401)
      );
    }
    const newUser = await User.create({
      fullName,
      userName,
      email,
      password,
      phoneNumber,
      secondPhoneNumber,
      telegram,
      skype,
      country,
      state,
      city,
      profilePic,
      languages,
      totalExperience,
      totalProject,
      numberAward,
      role,
    });
    const token = signToken(newUser.id);
    newUser.password = undefined;
    res.status(201).json({
      status: "success",
      token: token,
      data: {
        user: newUser,
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
exports.login = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return next(new appError("please provide userName or password", 401));
    } else if (userName && password) {
      const user = await User.findOne({
        where: { userName: userName },
      });
      if (!user) {
        return next(new appError("This user does not exist", 401));
      }
      const correct = await user.comparePassword(password);
      if (!correct) {
        return next(new appError("please provide valid password", 401));
      }
      const token = signToken(user.id);
      user.password = undefined;
      res.status(201).json({
        status: "success",
        token,
        data: {
          user,
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

exports.resetPassword = async (req, res) => {
  try {
    console.log("user");
    console.log("user");
    console.log(req.auth);
    const user = await User.scope("withCreditionals").findOne({
      where: { id: req.auth.id },
    });
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return next(
        new appError("Password and confirm password is not same", 401)
      );
    }
    if (!user) {
      return next(new appError("This user does not exist.", 401));
    }
    const newUser = {
      password: password,
    };
    const updatedUser = await User.update(newUser, {
      where: { id: user.id },
    });
    if (updatedUser[0] == 1) {
      res.status(401).json({
        status: "success",
        data: {
          message: "Password updated successfuly",
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
