// fs and os are buit in node modules -> there is no need to install them on the terminal

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile('./usersName.js', `${user.username} `, err => {
    if (err) throw err;
    fs.appendFile('./messages.js', `The user name is appened to the file  successfully
    `, err => {
        if (err) throw err;
    });
    fs.rename('./usersName.js', 'users.js', err => {
        if (err) throw err;
        fs.appendFile('./messages.js', `The file is renamed successfully
        `, err => {
            if (err) throw err;
        });
    })
    fs.unlink('./users.js', err => {
        if (err) throw err;
        fs.appendFile('./messages.js', `The file is deleted successfully 
        `, err => {
            if (err) throw err;
        });
    })
});


