console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
var command = argv._[0]
console.log('Command: ', command);
console.log('Process',process.argv);
console.log('Yargs', argv)
//process.argv helps grabbing input from user (command line argument)

if (command === 'add') {
    // console.log('Adding new note');
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    // console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') {
    // console.log('Reading note');
    notes.getNote(argv.title);
} else if (command === 'remove') {
    // console.log('Remove note')
    notes.removeNote(argv.title)
} else {
    console.log('Command not recognized!');
}