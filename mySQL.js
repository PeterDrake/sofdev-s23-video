var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "compression",
    password: "compression",
    database: "compression"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM compressaur", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });