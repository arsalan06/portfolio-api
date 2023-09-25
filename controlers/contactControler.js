const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: process.env.EMAIL_PORT,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.USER_NAME,
    pass: process.env.PASSWORD,
  },
});
exports.contact = async (req, res) => {
  try {
    const { from, to, subject, desc, userId } = req.body;
    const info = await transporter.sendMail({
      from: from, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: desc, // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    res.status(201).json({
      status: "success",
      data: {
        message: `Message sent:  ${info.messageId}`,
      },
    });
    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};
