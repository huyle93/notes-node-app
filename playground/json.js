// taking an object and convert to a string
/* var obj = {
    name: 'Huy Le'
};
var stringObj = JSON.stringify(obj)
console.log(typeof stringObj);
console.log(stringObj); */

// taking a string and convert to object
/* var personString = '{"name": "Huy Le", "age": 25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person); */

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
//convert obj to string
var originalNoteString = JSON.stringify(originalNote);

//write new json file from originalNoteString
fs.writeFileSync('notes.json', originalNoteString);

//read the new json file, convert back to obj and print out type and content
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
