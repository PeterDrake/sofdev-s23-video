// requiring path and fs modules

//pm2 start print.js --restart-delay=300000 sets 5 minute delay
// pm2 log
// pm2 list
// pm2 delete 0

const path = require('path');
const fs = require('fs');
const { brotliCompress } = require('zlib');
const { error } = require('console');

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

    if(files.length == 0){
        console.log("No files in input directory");
        process.exit();
    }

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

    compress(result[0])
    console.log("finished");
}

function compress(information){
    const path = require('path');
    const filename = information.FileLocation;


    const hbjs = require('handbrake-js')

    const options = {
        input: 'input/'+information.FileLocation,
        output: 'output/'+ path.parse(filename).name + '.mp4',
        preset: information.DesiredSize
    }

    hbjs.exec(options, complete(information.FileLocation))
        .on('error', console.error)
        .on('output', console.log)
        //.on("complete", onComplete(information.FileLocation))

    
    //print
}

function complete(filename){
    console.log("Compression Complete");
    // fs.unlink("input/" + filename, (err) => {
    //     if (err) {
    //         throw err;
    //     }

    //     console.log("Delete File successfully.");
    // });
    process.exit();
}
