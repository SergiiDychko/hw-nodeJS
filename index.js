const contactActions = require('./contacts')

const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactActions.listContacts();
      break;

    case "get":
      contactActions.getContactById(id);
      break;

    case "add":
      contactActions.addContact(name, email, phone);
      break;

    case "remove":
      contactActions.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
