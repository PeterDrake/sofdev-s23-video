window.addEventListener("DOMContentLoaded",domLoaded);

function domLoaded(){
    addEmailValidatior();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (day === 23 && month === 3) {
        document.querySelector("body").style.backgroundImage="url(upload/spinn.gif)";
        document.querySelector("#banner").innerHTML = "Happy Halloween!";
        document.querySelector("#banner").style.textAlign = "center";
    }
}

function addEmailValidatior(){
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    emailField = document.getElementById("email");
    emailField.addEventListener("keyup", function (event) {
        if (emailField.value.match(validRegex)) {

            console.log("true");
        
            return true;
        
          } else {
        
            console.log("false");
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