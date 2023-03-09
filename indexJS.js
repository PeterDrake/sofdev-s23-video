src="https://smtpjs.com/v3/smtp.js"

window.addEventListener("DOMContentLoaded",domLoaded);

function domLoaded(){
    addEmailValidatior();
}

function addEmailValidatior(){
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    emailField = document.getElementById("email");
    emailField.addEventListener("keyup", function (event) {
        if (emailField.value.match(validRegex)) {

            console.log("true");
        
            document.form1.text1.focus();
        
            return true;
        
          } else {
        
            console.log("false");
            document.form1.text1.focus();
            return false;
        
          }
    });
}

function sendEmail() {
    Email.send({
    Host: "smtp.gmail.com",
    Username: "lc.compressor@gmail.com'",
    Password: "compressor1249",
    To: document.getElementById("email"),
    From: "lc.compressor@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
    })
    .then(function (message) {
    alert("mail sent successfully");
    });
}