const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

// функція listContacts повертає список всіх контактів
async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        console.log(data);
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
}
// listContacts();

// функція getContactById знаходить і повертає контакт з айдішником отриманим у виклику
async function getContactById(contactId) {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        const result = JSON.parse(data).find(
        (contact) => contact.id === contactId
        );
        console.log(result);
        return result;
    } catch (error) {
    console.log(error);
    }
}
// getContactById('2');

// функція removeContact знаходить і видаляє контакт з айдішником отриманим у виклику
async function removeContact(contactId) {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        const result = JSON.parse(data).filter(
        (contact) => contact.id !== contactId
        );
        fs.writeFile(contactsPath, JSON.stringify(result), "utf-8");
    } catch (error) {
    console.log(error);
    }
}
// removeContact('3');

// функція addContact додає у файл кокнтактів новий контакт і присвоює йому id
function addContact(name, email, phone) {
  // ...твій код
}
