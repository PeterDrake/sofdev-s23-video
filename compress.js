const testFolder = './uploads/';
const fs = require('fs');
const { parse } = require('querystring');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    var path = require('path');


    console.log(path.extname(file));
    console.log(file);
  });
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});