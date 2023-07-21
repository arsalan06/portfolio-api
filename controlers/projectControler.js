const { Project, Media } = require("../models");
const appError = require("../utils/appError");

exports.addProject= async (req,res,next)=>{
    try{
      const {projectName, projectTech, projectDuration, projectDescription, userId}=req.body
    const newProject=await Project.create({
      projectName,
      projectDescription,
      projectDuration,
      projectTech,
      userId
    });
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