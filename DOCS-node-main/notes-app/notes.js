const { loadNotes, saveNotes } = require("./utils.js");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes";
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse("Your notes"));

  notes.forEach((note) => console.log(note.titulo));
};

const addNote = (titulo, texto) => {
  const notes = loadNotes();
  notes.push({ titulo, texto });
  saveNotes(notes);

  const msg = chalk.green("Note Saved!");
  console.log(msg);
};

const removeNote = (titulo) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.titulo !== titulo);
  saveNotes(notesToKeep);

  const msg = chalk.red("Note Removed!");
  console.log(msg);
};

const readNote = (titulo) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.titulo === titulo);

  if (note) {
    console.log(chalk.inverse(note.titulo));
    console.log(note.texto);
  }
};

module.exports = { getNotes, addNote, removeNote, listNotes, readNote };
