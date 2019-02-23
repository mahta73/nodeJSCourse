console.log('starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try { 
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch(e) {
        return [];
    }
};

var saveNotes = notes => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title, 
        body
    };
    
    var filteredNotes = notes.filter(element => element.title === title);
    
    if (filteredNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter(note => note.title === title);

    return filteredNotes[0];
}

var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes();
    // filter notes, removing the one with title
    var filteredNotes = notes.filter( element => element.title !== title);
    // save new notes array
    saveNotes(filteredNotes);

    return filteredNotes.length !== notes.length;
}

var myGoal = () => {
    console.log('My goal is to work as a developer');
}

var logNote = (note) => {
    debugger;
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote, 
    getAll,
    getNote,
    removeNote,
    myGoal,
    logNote
}
