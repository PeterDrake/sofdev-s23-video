var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('main.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

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


