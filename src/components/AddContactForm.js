import React, { useState} from "react";

function AddContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    onAdd({
      name,
      role,
      company,
      email,
      phone,
    });

    // Clear form
    setName("");
    setRole("");
    setCompany("");
    setEmail("");
    setPhone("");
  };

  return (
    <div style={{textAlign:"center"}}>
    <form className="add-contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/>
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      /><br/>
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      /><br/>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      /><br/>
      <button type="submit" className="btn">
        ➕ Add Contact
      </button>
      
    </form>
    </div>
  );
}

export default AddContactForm;
