const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmailRequest = async (req, res) => {
  try {
    const { to, name, desc } = req.body;
    // const msg = {
    //   to: to, // Change to your recipient
    //   from: "rehan.naveed@o2soft.org", // Change to your verified sender
    //   subject: name,
    //   text: desc,
    //   html: desc,
    // };
     
    //   with proper template
    const msg = {
      to: to, // Change to your recipient
      from: process.env.SENDER_EMAIL, // Change to your verified sender
      templateId: process.env.TEMPLATE_ID,
      dynamicTemplateData: {
        name: name,
        text: desc,
      },
    };
    await sgMail
      .send(msg)
      .then(() => {
        res.status(201).json({
          status: "success",
          data: {
            message: `Message sent`,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(401).json({
          status: "Fail",
          message: error,
        });
      });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};
