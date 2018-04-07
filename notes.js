console.log('Starting notes.js');

// console.log(module);
// module.exports.age = 25;
module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};

module.exports.add = (num1, num2) => {
  return num1 + num2;
};
