import React from "react";


function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior:"smooth" });
    }
  };
  return (
    <header className="header">
      <h1>Contacts</h1>
      <button className="add-btn" onClick={()=>scrollToSection("addContact")}>+ Add Contact</button>
    </header>

  );
}

export default Header;
