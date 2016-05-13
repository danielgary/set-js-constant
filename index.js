#!/usr/bin/env node
require('shelljs/global');

const fs = require('fs');
const yargs = require('yargs');

const argv = yargs
    .usage('Usage: $0 -i "inputFile" -c "constantName" -v "value"')
    .demand(['i', 'c', 'v'])
    .argv;


//Does the input file exist?
if (!fs.existsSync(argv.i)) {
    console.log("File does not exist: " + argv.i);
}

//Try to sed it
try {

    sed('-i', `${argv.c}.*`, `${argv.c} = ${argv.v};`, argv.i);

} catch (err) {
    console.error(err);
}