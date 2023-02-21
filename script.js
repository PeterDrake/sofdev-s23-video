console.log("hello world");
let obj {
  name: "hello";
}
let jason = "hello world";
var fs = require("fs");
fs.writeFile('myjsonfile.json', jason, 'utf8', callback);

function testResults (form) {
    let inputValue = form.inputbox.value;
    let formData = new FormData(form);
    let object = {};
    formData.forEach(function(value, key){
      object[key] = value;
    });

    
    var json = JSON.stringify(object);
    alert(json);        
    var fs = require("fs");
    fs.writeFile('myjsonfile.json', json, 'utf8', callback);
  }
