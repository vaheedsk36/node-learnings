const path = require("path");
const getBasename = path.basename('/Users/masoodakhtarvaheed/Documents/personal-files/node-files');
const getFileextension = path.extname('/Users/masoodakhtarvaheed/Documents/personal-files/node-files/path-module.js');
const newFilePath = path.join('demopath.com',getBasename);
console.log(getFileextension);
console.log(newFilePath);