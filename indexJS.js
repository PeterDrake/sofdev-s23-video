window.addEventListener("DOMContentLoaded",domLoaded);

document.getElementById("submit").addEventListener("click", emptyArea);


function domLoaded(){
    addEmailValidatior();
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

function emptyArea(e) {
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    emailField = document.getElementById("email");
    if (emailField.value.match(validRegex)) { // .trim is supported by browsers since IE9
      // If we don't preventDefault, the form will submit after this alert
      alert("OK")
    } else {
      
      alert("Please fill all fields");
      // the conditions were not met, so call preventDefault to 
      // stop the browsers default behavior of submitting the form
      e.preventDefault();
      e.stopPropagation();
    }
  }