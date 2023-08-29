const contacts = require("./contacts");
const { program } = require('commander');

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const listContacts = await contacts.listContacts()
      return console.table(listContacts);

    case 'get':
          const contact = await contacts.getContactById(id);
      return console.log(contact);

    case 'add':
      const newContact = await contacts.addContact({name, email, phone})
      return console.log(newContact);

      case 'remove':
          const deletedContact = await contacts.removeContact(id);
          return console.log(deletedContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();
const options = program.opts();
invokeAction(options);

