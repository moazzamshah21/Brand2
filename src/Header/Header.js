import React, { useState } from "react";
import "./Header.css";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false); // Close menu after click
  };

  return (
    <header className="header">
      <div className="logo">My Logo</div>
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleNavClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavClick}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={handleNavClick}>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavClick}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
