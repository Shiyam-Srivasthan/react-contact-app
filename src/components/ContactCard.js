function ContactCard({ contact }) {
  return (
    <div className="cards-container">
      <div className="contact-card">
          <img
          src="https://t3.ftcdn.net/jpg/09/64/89/20/360_F_964892089_vioRltmAxaoQEBLtYtChVBxIzDWwhA3T.jpg" 
          alt="Profile" 
          className="profile-pic"
          />
          <h2>{contact.name}</h2>
          <p className="role">{contact.role}</p>
          <p className="company">{contact.company}</p>
          <div className="contact-info">
          <p>✉️ {contact.email}</p>
          <p>📞 {contact.phone}</p>
          </div>
      </div>
    </div>
  );
}

export default ContactCard;
