/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

// this file is mainly used to register babel
// since the file that registers babel cannot be es6-ified

// some environments run the app from a different directory
process.chdir(__dirname);

require('babel/register');

module.exports = require('./server');