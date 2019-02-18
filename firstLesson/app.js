const fs = require('fs'); // buit in module
const os = require('os');

// fs.unlink -> delete a file
fs.unlink('./delete.js', err => {
    if (err) throw err;
    console.log('successfully deleted');
});

try {
    fs.unlinkSync('./delete2.js');
    console.log('successfully deleted');
} catch(err) {
    throw err;
}

fs.rename('./name.js' , './Name.js', err => {
    if(err) throw err;
    console.log('renamed complete');
    fs.stat('./Name.js', (err, stats) => {
        if (err) throw err;
        console.log(JSON.stringify(stats));
    });
})

fs.readFile('./app.js', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.appendFile('./name.js', 'maybe one day my dreams come true', err => {
    if (err) throw err;
    console.log('appened successfully');
});
 
let user = os.userInfo();
console.log(user);

fs.appendFile('./users.js', `${user.username} ` , err => {
    if (err) throw err;
    console.log('successfully appended');
});

fs.unlink('./users.js', err => {
    if (err) throw err;
});