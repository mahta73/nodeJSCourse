console.log('starting app.js');

const yargs = require('yargs');
const notes = require('./notes.js');
const _ = require('lodash');

// var command = process.argv[2];
// console.log('Command: ', command);

var argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    //  type checking with lodash
    var consLog = (_.isUndefined(note) ? `ERROR: The title "${argv.title}" already exists` : notes.logNote(note));
    console.log(consLog);
} else if (command === 'remove') {
    var removedNote = notes.removeNote(argv.title);
    var consLog = (removedNote ? `The note is removed successfully` : `ERROR: note with the title ${argv.title} does not exist`);
    console.log(consLog);
} else if (command === 'list') {
    notes.getAll();   
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    var consLog = (note ? notes.logNote(note) : 'ERROR: note not found');
    console.log(consLog);
} else if (command === 'goal') {
    notes.myGoal();
}else {
    console.log(`The command ${command} is not recognized`);
}

