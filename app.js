console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

//process.argv helps grabbing input from user (command line argument)

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Remove note')
} else {
    console.log('Command not recognized!');
}