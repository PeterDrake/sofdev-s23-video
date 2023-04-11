// requiring path and fs modules
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'input');

// var x = ( function() {return true;} ) ();

// function getListOfFiles(directoryPath) {
    fs.readdir(directoryPath, function (err, files) {

        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } else {
            doEverythingElse(files);
        }
    });
    return -1;
// }

// console.log(getListOfFiles(directoryPath));

function doEverythingElse(files) {
    console.log(files);

    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "compression",
        password: "compression",
        database: "compression"
    });

    let str = "";
    files.forEach(function(file) {
        str += `'${file}', `
    });
    str = str.substring(0, str.length - 2);

    con.connect(function(err) {
        if (err) throw err;
        con.query(`SELECT * FROM compressaur WHERE FileLocation IN (${str})`, function (err, result, fields) {
            if (err) throw err;
            console.log(result);

            sortByDate(result);
        });
    });
}

function sortByDate(result){
    console.log(result[0].DueDate);

    result.sort(function(a, b) {
        return new Date(a.DueDate) - new Date(b.DueDate);
    });

    console.log(result);
}
