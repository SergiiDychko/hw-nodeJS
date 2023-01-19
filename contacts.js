const fs = require("fs").promises;
const path = require("path");
const uniqid = require("uniqid");

const contactsPath = path.resolve("./db/contacts.json");

// функція listContacts повертає список всіх контактів
async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        console.table(JSON.parse(data));
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
}

// функція getContactById знаходить і повертає контакт з айдішником отриманим у виклику
async function getContactById(contactId) {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        
        const result = JSON.parse(data).find(
          (contact) => contact.id === String(contactId)
        );
        console.table(result);
        return result;
    } catch (error) {
    console.log(error);
    }
}

// функція removeContact знаходить і видаляє контакт з айдішником отриманим у виклику
async function removeContact(contactId) {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        const result = JSON.parse(data).filter(
          (contact) => contact.id !== String(contactId)
        );
        fs.writeFile(contactsPath, JSON.stringify(result, null, 2));
        console.table(result);
    } catch (error) {
    console.log(error);
    }
}

// функція addContact додає у файл запис про новий контакт і присвоює йому id за допомогою бібліотеки uniqid
async function addContact(name, email, phone) {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        const updateData = [
          ...JSON.parse(data),
          { id: uniqid(), name, email, phone },
        ];
        fs.writeFile(contactsPath, JSON.stringify(updateData, null, 2));
        console.table(updateData);
    } catch (error) {
      console.log(error);
    }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};