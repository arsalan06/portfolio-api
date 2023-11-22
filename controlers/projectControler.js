const { Project, Media, Video } = require("../models");
const appError = require("../utils/appError");

exports.addProject = async (req, res, next) => {
  try {
    // const {projectName, projectTech, projectDuration, projectDescription, userId}=req.body
    const newProject = await Project.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        project: newProject,
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

exports.addMedia = async (req, res, next) => {
  try {
    const { files } = req;
    const { projectId } = req.query;
    let projectImages = [];
    for (let i = 0; i < files.length; i++) {
      projectImages.push(files[i].filename);
    }
    const newProject = await Media.create({
      projectImages,
      projectId,
    });
    res.status(201).json({
      status: "success",
      data: {
        media: newProject,
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
exports.addVideo = async (req, res, next) => {
  try {
    const { file } = req;
    const { projectId } = req.query;
    const newProjectVideo = await Video.create({
      projectVideo:file.filename,
      projectId,
    });
    res.status(201).json({
      status: "success",
      data: {
        projectVideo: newProjectVideo,
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
exports.getProject = async (req, res, next) => {
  try {
    const { userName } = req.query;
    const userProjects = await Project.findAll({
      where: { userName },
      include: [
        {
          model: Media,
          as: "Media",
        },
        {
          model: Video,
          as: "Video",
        },
      ],
    });
    res.status(201).json({
      status: "success",
      data: {
        projects: userProjects,
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
