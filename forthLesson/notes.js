console.log('starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    console.log('adding note: ', title, body);
    var notes = [];
    var note = {
        title, 
        body
    };
    
    try { 
         notes = JSON.parse(fs.readFileSync('notes-data.json'));
    } catch(e) {
       
    }
    
    var filteredNotes = notes.filter(element => element.title === title);
    
    if (filteredNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
    
    // var isTitleUniq = true;
    // notes.forEach(element => {
    //     if (element.title === title) {
    //         console.log(`ERROR: ${note.title} is already taken`);  
    //         isTitleUniq = false;  
    //     }
    // })

    // if (isTitleUniq) {
    //     notes.push(note);
    //     fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    // }

}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note', title);
}

var removeNote = (title) => {
    console.log('removing note', title);
}

var myGoal = () => {
    console.log('My goal is to work as a developer');
}

module.exports = {
    addNote, 
    getAll,
    getNote,
    removeNote,
    myGoal
}
