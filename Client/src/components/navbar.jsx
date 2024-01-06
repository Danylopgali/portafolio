import React from 'react';
import "./styles/navbar.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/home" onClick={(e) => { e.preventDefault(); scrollToSection('proyectos'); }}>
            Proyectos
          </a>
        </li>
        <li>
          <a href="/home" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>
            Contacto
          </a>
        </li>
        <li>
          <a href="/home" onClick={(e) => { e.preventDefault(); scrollToSection('sobre-mi'); }}>
            Sobre mí
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

