const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    let ext = file.mimetype?.split('/')[1];
    cb(null, `project-video-${req.query.projectId}.${ext}`);
    // cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
const uploadVideo = upload.single("video");

module.exports = { uploadVideo };
