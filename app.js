console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Huy Le'));


var filteredArray = _.uniq([3,4,'huy',2,'huy',3])
console.log(filteredArray)
// console.log(_.uniq([2,'huy',3,4,'huy',5,4,2]))
// lodash.com/docs

/* var res = notes.addNote();
console.log(res) */

// console.log('Result: ', notes.addFunc(9,-2));
// var res = notes.addFunc(9,-2);
// console.log(res)

// var user = os.userInfo();

// fs.appendFile('greeting.txt', `Hello ${user.username}! Your are ${notes.age}.`, function (err) {
// 	if (err) {
// 		console.log('unable to write to file');
// 	}
// });
