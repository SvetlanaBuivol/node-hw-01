const contacts = require("./contacts");
// const argv = require('yargs').argv;

// TODO: рефакторити
const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const listContacts = await contacts.listContacts()
      return console.log(listContacts);

    case 'get':
          const contact = await contacts.getContactById(id);
      return contact;

    case 'add':
      const newContact = await contacts.addContact({name, email, phone})
      return console.log(newContact);

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction({action: 'add', name: 'Hello', email: 'hello@mail.com', phone: '111-333-555'});