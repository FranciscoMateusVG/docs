const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { addNote, removeNote, listNotes, readNote } = require("./notes.js");

const argv = yargs(hideBin(process.argv)).argv;
const command = argv._[0];

const titulo = argv.titulo;
const texto = argv.texto;

switch (command) {
  case "add":
    addNote(titulo, texto);
    break;

  case "remove":
    removeNote(titulo);
    break;
  case "list":
    listNotes();
    break;
  case "read":
    readNote(titulo);
    break;
  default:
    break;
}
