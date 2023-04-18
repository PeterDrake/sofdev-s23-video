const hbjs = require('handbrake-js')
const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, 'input');
let filename = '';

fs.readdir(directoryPath, function (err, files) {

    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } else {
        filename = files[0];
        compress(files[0]);
        
        }
        
});


function compress(item){
    
    console.log(item);


    const options = {
        input: 'input/'+item,
        output: 'output/'+ path.parse(filename).name  + '.mp4',
        preset: 'H.265 MKV 480p30'
    }
    
    hbjs.exec(options, complete)

    hbjs.spawn(options)
        .on('error', console.error)
        .on('progress', progress => {
            console.log(
              'Percent complete: %s, ETA: %s',
              progress.percentComplete,
              progress.eta
            );
            
          })
}

function complete(){
    console.log("Compression Complete");
    fs.unlink("input/" + filename, (err) => {
        if (err) {
             throw err;
         }

        console.log("Delete File successfully.");
        });
    
    process.kill(2);
}

