console.log('starting app.js');

const yargs = require('yargs');
const notes = require('./notes.js');

// var command = process.argv[2];
// console.log('Command: ', command);

var argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else if (command === 'list') {
    notes.getAll();   
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'goal') {
    notes.myGoal();
}else {
    console.log(`The command ${command} is not recognized`);
}

