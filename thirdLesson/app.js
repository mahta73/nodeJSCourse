// 3rd party module
const _ = require('lodash'); // look up node_modules folder

// buit in modules
const fs = require('fs');

fs.appendFile('./lodashDocumentaion.txt', `${_}`, err => {
    if (err) throw err;
    console.log('lodash documentation is appended successfully');
});

console.log(_.isString(true));

console.log(' I am in love with nodemon');


