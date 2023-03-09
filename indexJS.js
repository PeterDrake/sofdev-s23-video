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

