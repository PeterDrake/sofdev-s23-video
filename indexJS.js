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

async function saveFile(){
    let formData = new FormData();
    formData.append("file", fileupload.files[0]);
    await fetch('/upload.php', {method: "POST", body: formData});
    alert('The file has been uploaded successfully.');
    return 1;
}