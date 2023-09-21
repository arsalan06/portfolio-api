const { Project, Media } = require("../models");
const appError = require("../utils/appError");

exports.addProject= async (req,res,next)=>{
    try{
      // const {projectName, projectTech, projectDuration, projectDescription, userId}=req.body
    const newProject=await Project.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        project: newProject,
      },
    });
        
    }catch(err){
        console.log(err);
        res.status(401).json({
          status: "Fail",
          message: err,
        });
    }
}


exports.addMedia= async (req,res,next)=>{
  try{
    const {files}=req
    const {projectId}=req.query
    let projectImages=[]
    for(let i=0; i<files.length; i++){
      projectImages.push(files[i].filename)
    }
  const newProject=await Media.create({
    projectImages,
 projectId
  });
  res.status(201).json({
    status: "success",
    data: {
      media: newProject,
    },
  });
      
  }catch(err){
      console.log(err);
      res.status(401).json({
        status: "Fail",
        message: err,
      });
  }
}

exports.getProject=async(req,res,next)=>{
  try{
    const userProjects= await Project.findAll({where:{userId:req.userId}, include: {
      model: Media,
      as: "Media"
    }})
    res.status(201).json({
      status: "success",
      data: {
        projects: userProjects,
      },
    });
  }catch(err){
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
}