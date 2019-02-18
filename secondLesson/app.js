// require built in modules
const fs = require('fs');
const os = require('os');

// require my very own files
const notes = require('./notes.js'); // It is going to store all of the exports

const user = os.userInfo();

fs.appendFile('./greetings.txt', `Hello ${user.username}, you are ${notes.age} years old
`, 
err => {
    if (err) throw err;
    fs.appendFile('./logs.txt', `greetings.txt file appended successsfully
    `, err => {
        if (err) throw err;
    });
});

var res = notes.add(2, 5);
console.log(res);
