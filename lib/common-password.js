/*jslint node: true */
'use strict';

var crc32 = require('buffer-crc32');
var passwords = require('./10k most common.json');

function commonPassword(password) {
  var hash = crc32.unsigned(password.toLowerCase());
  return Boolean(~passwords.indexOf(hash));
}

module.exports = commonPassword;
