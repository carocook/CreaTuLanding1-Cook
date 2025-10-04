import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import "./NavBar.css";

function NavBar({ carrito }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Kuvika" />
      </div>

      <ul className="navbar-links">
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

      <CartWidget carrito={carrito} />
    </nav>
  );
}

export default NavBar;
