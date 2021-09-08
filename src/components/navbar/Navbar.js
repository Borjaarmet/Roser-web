import React from "react";
import Logo from "../logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Logo />
      </div>
      <div className="navbar__items">
        <ul>
          <li>
            <a href="/">Roser</a>
          </li>
          <li>Psicoterapia</li>
          <li>Como trabajo</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
