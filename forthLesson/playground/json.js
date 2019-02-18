// var obj = {
//     name: 'mahta',
//     age: 24,
//     occupation: 'senior web developer',
//     isCoder: true
// }

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(obj);

// var personString = '{"name": "Mahta", "age": "24"}';

// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFile('notes.json', originalNoteString, err => {
    if (err) throw err;
    fs.readFile('notes.json', (err, contents) => {
        if (err) throw err;
        var note = JSON.parse(contents);
        console.log(typeof note);
        console.log(note.title);
    });
});

