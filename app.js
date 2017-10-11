console.log('starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

/* var res = notes.addNote();
console.log(res) */

console.log('Result: ', notes.addFunc(9,-2));
// var res = notes.addFunc(9,-2);
// console.log(res)

// var user = os.userInfo();

// fs.appendFile('greeting.txt', `Hello ${user.username}! Your are ${notes.age}.`, function (err) {
// 	if (err) {
// 		console.log('unable to write to file');
// 	}
// });
