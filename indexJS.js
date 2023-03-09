src="https://smtpjs.com/v3/smtp.js"

window.addEventListener("DOMContentLoaded",domLoaded);

function domLoaded(){
    addEmailValidatior();
}

function addEmailValidatior(){
    emailField = document.getElementById("email")
    emailField.addEventListener("keyup", function (event) {
    isValidEmail = emailField.checkValidity();
    console.log(isValidEmail);
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
    alert("mail sent successfully")
    });