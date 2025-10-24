import ContactCard from './ContactCard';

function ContactList({ contacts }) {
  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <div className="cards-container">
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
