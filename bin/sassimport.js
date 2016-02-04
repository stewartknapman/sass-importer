#!/usr/bin/env node

var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var SassImporter = require('../lib/sass-importer.js');

var err = function (message) {
  console.log(message);
  process.exit(1);
};

if (argv._[0]) {
  var data = '';
  var output = argv.o || argv.output;
  var paths = new SassImporter(argv._[0]);
  
  for (var i = 0; i < paths.length; i++) {
    data += fs.readFileSync(paths[i]);
  }
  
  if (output) {
    fs.writeFileSync(output, data);
  } else {
    process.stdout.write(data);
  }
  process.exit(0);
  
} else {
  err('ERR: Please supply an input file');
}