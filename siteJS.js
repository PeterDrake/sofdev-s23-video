//import {uploadFile} from './index.js'

window.addEventListener("DOMContentLoaded",domLoaded);

document.getElementById("submit").addEventListener("click", emptyArea);


function domLoaded(){
    addEmailValidatior();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (day === 31 && month === 10) {
        document.querySelector("body").style.backgroundImage="url(upload/spinn.gif)";
        document.querySelector(".Header_Text").innerHTML = "Happy Halloween!";
    }
    const today = new Date();
    let currentDay = String(today.getDate()).padStart(2, '0');
    let currentMonth = String(today.getMonth()+1).padStart(2,"0");
    let currentYear = today.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    document.getElementsByName("date_due")[0].setAttribute('min', currentDate);

    const form = document.getElementById('upload-form');
    const fileInput = document.getElementById('video');
    const progressBar = document.getElementById('progress');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/upload', true);
        xhr.upload.onprogress = e => {
            if (e.lengthComputable) {
                const percentComplete = (e.loaded / e.total) * 100;
                progressBar.style.width = `${percentComplete}%`;
            }
        };
        xhr.send(formData);
    });
}

function clickProcess() {
    sendEmail();
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