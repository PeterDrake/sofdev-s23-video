function getValuesFromInputs(){
    const name = document.querySelector("input.name").value;
    const email = document.querySelector("input.email").value;
    const video = document.querySelector("input.video").files[0];

    document.querySelector("form").style.display = "none";

    return [name, email, video];
}

function handleSubmit(){
    const info = [];
    info = getValuesFromInputs();

    console.log(info);
}
