import { useState } from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import "./NavBar.css";

function NavBar({ carrito }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#inicio">
          <img src={logo} alt="Logo Kuvika" />
        </a>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#productos">Productos</a>
        </li>
        <li>
          <a href="#cuidado">Como cuidar tus joyas</a>
        </li>
        <li>
          <a href="#cambios">Cambios y devoluciones</a>
        </li>
      </ul>

      <div className="navbar-right">
        <CartWidget carrito={carrito} />
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
