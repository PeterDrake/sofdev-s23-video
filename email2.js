const nodemailer = require("nodemailer");
const pass = require("./pass.js"); // path to security file containing app password

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "lc.compressor@gmail.com",
      pass: pass // function found in pass.js security file
   }
});

const mailOptions = {
   from: "lc.compressor@gmail.com ",
   to: "lc.compressor@gmail.com ",
   subject: "Nodemailer Test",
   html: "Test <button>sending</button> Gmail using Node JS"
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response);
   }
});