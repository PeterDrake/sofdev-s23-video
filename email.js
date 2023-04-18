let passToken = getEmailPassToken(); //grab from pass.js

var http = require('http');
http.createServer(function (req, res) {
    //beginning of email code
  var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lc.compressor@gmail.com',
    pass: passToken
  }
});

var mailOptions = {
  from: 'lc.compressor@gmail.com',
  to: 'lc.compressor@gmail.com', //hardcoded to email iself, update with var later
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
//run "node /thisFileLocation", then open 127.0.0.1:1337 in web browser to send email