console.log('starting app.js');

const yargs = require('yargs');
const notes = require('./notes.js');
const _ = require('lodash');

// var command = process.argv[2];
// console.log('Command: ', command);

var argv = yargs.argv;
var command = argv._[0];

var consLog = ''; 
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    //  type checking with lodash
    consLog = (_.isUndefined(note) ? `ERROR: The title "${argv.title}" already exists` : `The note is added. Title: ${note.title}  body: ${note.body}`);
    console.log(consLog);
} else if (command === 'remove') {
    var removedNote = notes.removeNote(argv.title);
    consLog = (removedNote ? `The note is removed successfully` : `ERROR: note with the title ${argv.title} does not exist`);
    console.log(consLog);
} else if (command === 'list') {
    notes.getAll();   
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'goal') {
    notes.myGoal();
}else {
    console.log(`The command ${command} is not recognized`);
}

