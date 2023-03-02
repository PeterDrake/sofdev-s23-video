const hbjs = require('handbrake-js')

const options = {
    input: 'input/old_filename.filetype',
    output: 'output/new_filename.new_filetype',
    preset: 'H.265 MKV 480p30'
}

hbjs.spawn(options)
    .on('error', console.error)
    .on('output', console.log)