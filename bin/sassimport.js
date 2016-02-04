#!/usr/bin/env node

var fs = require('fs');
var concat = require('concat');
var argv = require('minimist')(process.argv.slice(2));
var SassImporter = require('../lib/sass-importer.js');

if (argv._[0] && argv._[1]) {
  var paths = new SassImporter(argv._[0]);
  concat(paths, argv._[1], function (error) {
    if (error) console.log('ERR:', error);
  });
  
} else {
  console.log('ERR: Please supply an input and/or output file');
}