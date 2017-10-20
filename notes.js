console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    // check for existing note
    try {
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    // check for duplicate note
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes)
        console.log('New note added');
        // console.log('Adding note', title, body);
    }
    else {
        console.log('Existing note');
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    // addNote above in ES6 is addNote: addNote which point to addNote function above
    getAll,
    getNote,
    removeNote
};