// fs will write files with an encoding of 'utf8'

// method 1: Using fs.writeFile -> high level

const fs = require('fs');

let message = new Buffer(`Dear God, I am learning about buffer in node js. and to be honest it is really fun`);

fs.writeFile('./message.txt', message , 'utf8',err => {
    if (err) throw err;
    console.log('The message is wirtten to message.txt by writeFile method');
});

// method 2: Using fs.write -> low level

let path = 'notes.txt';

// open the file in writing mode

// fs.open(path, 'w', (err, fd) => {
//     if (err) throw err;
//     console.log('The file is opened in writing mode');
// })