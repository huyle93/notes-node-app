console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = []
    var note = {
        title,
        body
    };

    try {
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    // console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
}

module.exports = {
    addNote,
    // addNote above in ES6 is addNote: addNote which point to addNote function above
    getAll,
    getNote,
    removeNote
};