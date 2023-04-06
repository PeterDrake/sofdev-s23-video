// requiring path and fs modules
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'input');

let fileList = [];

function getListOfFiles(fileList, directoryPath) {
    fs.readdir(directoryPath, function (err, files) {

        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(file => {
            console.log(file);
            fileList.push(file);
        });
        return fileList;
    });
}

console.log(getListOfFiles(directoryPath));

