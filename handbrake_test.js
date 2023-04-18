const hbjs = require('handbrake-js')
const fs = require('fs')
const path = require('path')

let filename = "whatdolove.mp4";

const options = {
    input: 'input/' + filename,
    output: 'output/new.mp4',
    preset: 'H.265 MKV 480p30'
}

hbjs.exec(options, complete)

hbjs.spawn(options)
    .on('error', console.error)
    .on('output', console.log)

function complete() {
    fs.unlink("input/" + filename, (err) => {
        if (err) {
            throw err;
        }
        console.log("delete file successfully.");
    })
    console.log("pog")
}