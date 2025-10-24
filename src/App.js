import React, { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import AddContactForm from './components/AddContactForm';
import { contactsData } from './data/contacts';
import './App.css';
import Header from './components/Header';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => setContacts(contactsData), 300);
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
  };

  return (
    <div>
        <Header/>
        <br/>
        <SearchBar onSearch={setSearchTerm} />
        <ContactList contacts={filteredContacts} />
        <AddContactForm onAdd={addContact} />
    </div>
  );
}

export default App;
