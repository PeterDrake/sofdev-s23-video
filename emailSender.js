const nodemailer = require("nodemailer");
const pass = require("./security/pass.js"); // path to security file containing app password

// makes the email sender, connects to gmail account
const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "lc.compressor@gmail.com",
      pass: pass // function found in pass.js security file
   }
});

module.exports = function sendEmail(sendTo, shareLink){

  // makes the email
  const mailOptions = {
    from: "lc.compressor@gmail.com ",
    to: sendTo,
    subject: "Your Video Is Ready!",
    html: "<p>Your video has been compressed and is ready to download!</p><p>View it <a href="+shareLink+">here.</a></p>"
  };

  // sends the email
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log("Email sent: " + info.response);
    }
  });
  
};



