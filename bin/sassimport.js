#!/usr/bin/env node

var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var SassImporter = require('../lib/sass-importer.js');

//var paths = new SassImporter();

console.log('argv:', argv);