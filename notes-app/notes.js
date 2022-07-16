const fs = require('fs');
const chalk = require('chalk');

/**
 * Add a new note
 *
 * @param {String} title
 * @param {String} body
 */
const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Note title already taken'));
  }
};

/**
 * Remove note
 *
 * @param {String} title
 */
const removeNote = (title) => {
  const notes = loadNotes();

  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length === filteredNotes.length) {
    console.log(chalk.red.inverse('No note found!'));
  } else {
    saveNotes(filteredNotes);
    console.log(chalk.green.inverse('Note removed'));
  }
};

/**
 * List notes
 */
const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    return console.log(chalk.red.inverse('No notes found!'));
  }

  console.log(chalk.green.inverse('Your notes:'));

  notes.forEach((note) => {
    console.log('Title:', note.title);
    console.log('Body:', note.body);
    console.log();
  });
};

/**
 * Read a note
 *
 * @param {String} title
 */
const readNote = (title) => {
  const notes = loadNotes();

  const checkNote = notes.find((note) => note.title === title);

  if (!checkNote) {
    return console.log(chalk.red.inverse('No note found!'));
  }

  console.log(chalk.green(checkNote.title));
  console.log(checkNote.body);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  // console.log(dataJSON);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
