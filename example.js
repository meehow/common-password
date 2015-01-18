/*jslint node: true */
'use strict';

var commonPassword = require('common-password');

function isPasswordOK(password) {
  if (password.length < 4) {
    console.log('password is too short');
    return false;
  }
  if (commonPassword(password)) {
    console.log('password is too easy to guess');
    return false;
  }
  return true;
}


if (isPasswordOK(process.argv[2])) {
  console.log('OK');
} else {
  console.log('not OK');
}
