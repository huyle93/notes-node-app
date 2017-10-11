console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
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


