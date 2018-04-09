const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = process.argv[2];
// console.log('Command: ', command);
// // console.log('process', process.argv);
// console.log('Yargs', argv);

if (command === 'add') {
  // console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('note added successfully: ');
    notes.logNote(note);
  } else {
    console.log('The note you want to add is already exsited!');
  }
} else if (command === 'list') {
  // console.log('Listing all notes');
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  // console.log('Reading note');
  // notes.getNOte(argv.title);
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('The note is: ', note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  // console.log('Removing note');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else {
  console.log('command not recognized');
}

// var filteredArray = _.uniq(['Mike', 1, 'Richard', 1, 2, 3, 4]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Richard'));

// var res = notes.addNote();
// console.log(res);

// var sum = notes.add(1, 2);
// console.log(sum);

// var user = os.userInfo();

// console.log(user);
// fs.appendFile('greetings.txt', 'Hello world!', function(err) {
//   if (err) {
//     console.log('Unable to write file');
//   }
// });

// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!');
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
