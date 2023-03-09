var Email = { send: function (a)
     { return new Promise(function (n, e) 
        { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) 
        { n(e) 
        }) 
    }) 
}, ajaxPost: function (e, n, t) 
{ var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () 
{ var e = a.responseText; null != t && t(e) 
}, a.send(n) 
}, ajax: function (e, n) 
{ var t = Email.createCORSRequest("GET", e); t.onload = function () 
{ var e = t.responseText; null != n && n(e) 
}, t.send() 
}, createCORSRequest: function (e, n) 
{ var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t 
} 
};

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
}