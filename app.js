console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

var sum = notes.add(1, 2);
console.log(sum);

// var user = os.userInfo();

// console.log(user);
// fs.appendFile('greetings.txt', 'Hello world!', function(err) {
//   if (err) {
//     console.log('Unable to write file');
//   }
// });

// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!');
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
