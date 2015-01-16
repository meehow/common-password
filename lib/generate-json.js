/*jslint node: true */
'use strict';

var crc32 = require('buffer-crc32');
var fs = require('fs');

function removeEmpty(line) {
  return Boolean(line.length);
}

function parseLine(line) {
  return crc32.signed(line.trim());
}

var lines = fs.readFileSync('./lib/10k most common.txt').toString().split('\n');
var result = lines.filter(removeEmpty).map(parseLine);
var json = JSON.stringify(result, null, 2);
fs.writeFileSync('./lib/10k most common.json', json);
