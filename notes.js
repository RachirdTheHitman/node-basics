// console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  // console.log('Adding note', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  //make sure the title is unique by using filter function
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  // console.log('Getting all notes');
  return fetchNotes();
};

var getNote = (title) => {
  // console.log('Getting note', title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => {
    return note.title === title;
  });
  return filteredNotes[0];
};

var removeNote = (title) => {
  // console.log('Removing note', title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
// console.log(module);
// module.exports.age = 25;
// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New note';
// };

// module.exports.add = (num1, num2) => {
//   return num1 + num2;
// };
