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

}